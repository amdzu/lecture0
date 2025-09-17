// Плавная бегущая строка + слайдер скорости + красивый выбор файла
(function () {
  const container = document.getElementById('containerElem');
  const list = document.getElementById('list');
  const pauseBtn = document.getElementById('btn');
  const speedRange = document.getElementById('speedRange');
  const speedValue = document.getElementById('speedValue');
  const turboCheckbox = document.getElementById('slider');
  const fileInput = document.getElementById('file');
  const fileNameEl = document.getElementById('fileName');

  // Таблица значений скорости (px/sec) по фиксированным делениям 1..9
  const speedTable = { 1: 40, 2: 60, 3: 80, 4: 110, 5: 150, 6: 200, 7: 260, 8: 330, 9: 420 };
  const TURBO_MULTIPLIER = 2;

  let running = true;
  let currentX = 0;
  let targetSpeed = speedTable[Number(speedRange.value)];
  let displayedSpeed = targetSpeed;
  let lastTime = performance.now();

  // Основной цикл отрисовки
  function tick(now) {
    if (!running) {
      requestAnimationFrame(tick);
      lastTime = now;
      return;
    }

    const dt = (now - lastTime) / 1000; // сек
    lastTime = now;

    // Плавная инерция изменения скорости
    displayedSpeed += (targetSpeed - displayedSpeed) * 0.08;

    const turbo = turboCheckbox?.checked ? TURBO_MULTIPLIER : 1;
    const dx = -displayedSpeed * turbo * dt; // движение влево
    currentX += dx;

    // Когда первый элемент полностью ушёл влево — переносим его в конец
    let first = list.firstElementChild;
    if (!first) return requestAnimationFrame(tick);

    const firstWidth = first.offsetWidth;
    while (-currentX >= firstWidth) {
      currentX += firstWidth;
      list.appendChild(first);
      first = list.firstElementChild;
    }

    list.style.transform = `translate3d(${currentX}px,0,0)`;
    requestAnimationFrame(tick);
  }

  // Инициализация
  function init() {
    list.style.transform = 'translate3d(0,0,0)';
    speedValue.textContent = `${speedRange.value}/9`;
    requestAnimationFrame(tick);
  }

  // Управление паузой
  pauseBtn.addEventListener('click', () => {
    running = !running;
    pauseBtn.querySelector('.warn').textContent = running ? 'Пауза' : 'Пуск';
  });

  // Изменение скорости
  speedRange.addEventListener('input', () => {
    targetSpeed = speedTable[Number(speedRange.value)];
    speedValue.textContent = `${speedRange.value}/9`;
  });

  // Отображение имени файла
  fileInput.addEventListener('change', () => {
    const name = fileInput.files && fileInput.files[0] ? fileInput.files[0].name : 'Файл не выбран';
    fileNameEl.textContent = name;
  });

  // Загрузка текста из файла + старт справа (вне экрана)
  window.readFile = function (input) {
    const file = input.files && input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = String(e.target.result || '');
      const lines = text.split(/\r?\n/).filter(Boolean);
      list.innerHTML = '';

      for (const line of lines) {
        const li = document.createElement('li');
        li.className = 'list__item';
        li.textContent = line;
        list.appendChild(li);
      }

      // Начальное положение: полностью за правым краем контейнера
      // чтобы «не было на экране», а затем плавно въезжало
      const containerWidth = container.clientWidth || 1200;
      currentX = containerWidth + 20; // небольшой запас вправо
      list.style.transform = `translate3d(${currentX}px,0,0)`;

      // Если анимация была на паузе — запустим
      if (!running) {
        running = true;
        pauseBtn.querySelector('.warn').textContent = 'Пауза';
      }
    };
    reader.readAsText(file, 'utf-8');
  };

  init();
})();
