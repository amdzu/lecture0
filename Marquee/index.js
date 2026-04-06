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
  const modeRadios = document.querySelectorAll('input[name="speedMode"]');
  const sliderControl = document.getElementById('sliderControl');
  const wpmControl = document.getElementById('wpmControl');
  const wpmSelect = document.getElementById('wpmSelect');
  const wpmValue = document.getElementById('wpmValue');
  const wordCountDisplay = document.getElementById('wordCountDisplay');
  const durationDisplay = document.getElementById('durationDisplay');
  const tickLabelsContainer = document.querySelector('.tick-labels');

  // Таблица значений скорости (px/sec) по фиксированным делениям 1..9
  const speedTable = { 1: 40, 2: 60, 3: 80, 4: 110, 5: 150, 6: 200, 7: 260, 8: 330, 9: 420 };
  const DEFAULT_SLIDER_VALUE = Number(speedRange.value) || 5;
  const TURBO_MULTIPLIER = 2;
  const SPEED_MODE = { slider: 'slider', wpm: 'wpm' };
  const WORD_REGEX = /\p{L}+/gu; // только последовательности букв
  const WPM_VALUES = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120];
  const SLIDER_MARKS = ['1','2','3','4','5','6','7','8','9'];

  let speedMode = SPEED_MODE.slider;
  let running = true;
  let currentX = 0;
  let targetSpeed = speedTable[DEFAULT_SLIDER_VALUE];
  let displayedSpeed = targetSpeed;
  let lastTime = performance.now();
  let wordCount = 0;
  let listWidth = 0;
  let containerWidth = container.clientWidth || 1200;

  function setSliderForSliderMode() {
    if (!speedRange) return;
    speedRange.min = '1';
    speedRange.max = '9';
    speedRange.step = '1';
    const valueNum = Number(speedRange.value);
    if (!valueNum || valueNum < 1 || valueNum > 9) {
      speedRange.value = String(DEFAULT_SLIDER_VALUE);
    }
    if (speedValue) {
      speedValue.textContent = `${speedRange.value}/9`;
    }
  }

  function syncSliderWithWpm() {
    if (!speedRange || !wpmSelect) return;
    const currentWpm = Number(wpmSelect.value) || 60;
    const idx = WPM_VALUES.indexOf(currentWpm);
    const sliderIndex = idx >= 0 ? idx + 1 : WPM_VALUES.indexOf(60) + 1;
    speedRange.min = '1';
    speedRange.max = String(WPM_VALUES.length);
    speedRange.step = '1';
    speedRange.value = String(sliderIndex);
    if (speedValue) {
      speedValue.textContent = `${currentWpm} сл/м`;
    }
  }

  function syncWpmWithSlider() {
    if (!speedRange || !wpmSelect) return;
    const idx = Math.min(Math.max(Number(speedRange.value) || 1, 1), WPM_VALUES.length) - 1;
    const newWpm = WPM_VALUES[idx];
    wpmSelect.value = String(newWpm);
    if (speedValue) {
      speedValue.textContent = `${newWpm} сл/м`;
    }
  }

  function updateTickLabels() {
    if (!tickLabelsContainer) return;
    const spans = tickLabelsContainer.querySelectorAll('span');
    const labels = speedMode === SPEED_MODE.wpm
      ? WPM_VALUES.map(String)
      : SLIDER_MARKS;
    const count = labels.length;
    tickLabelsContainer.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
    spans.forEach((span, index) => {
      if (index < count) {
        span.textContent = labels[index];
        span.style.display = '';
      } else {
        span.style.display = 'none';
      }
    });
  }

  function countWords(text) {
    const matches = text.match(WORD_REGEX);
    return matches ? matches.length : 0;
  }

  function updateMeasurements() {
    containerWidth = container.clientWidth || 1200;
    listWidth = list.scrollWidth || 0;
  }

  function computeSliderSpeed() {
    return speedTable[Number(speedRange.value)] || speedTable[DEFAULT_SLIDER_VALUE];
  }

  function computeWpmSpeed() {
    const wpm = Number(wpmSelect?.value) || 60;
    if (!wordCount || !listWidth) return computeSliderSpeed();
    const durationSec = (wordCount / wpm) * 60;
    if (!durationSec) return computeSliderSpeed();
    const distance = containerWidth + listWidth;
    if (distance <= 0) return computeSliderSpeed();
    return distance / durationSec;
  }

  function computeWpmDuration() {
    const wpm = Number(wpmSelect?.value) || 60;
    if (!wordCount || !wpm) return 0;
    return (wordCount / wpm) * 60;
  }

  function computeSliderDuration() {
    const distance = containerWidth + listWidth;
    const speed = computeSliderSpeed();
    if (distance <= 0 || !speed) return 0;
    return distance / speed;
  }

  function formatSeconds(sec) {
    if (!isFinite(sec) || sec <= 0) return '0';
    if (sec >= 100) return String(Math.round(sec));
    const fixed = sec.toFixed(1);
    return fixed.endsWith('.0') ? fixed.slice(0, -2) : fixed;
  }

  function updateStats(durationSec) {
    if (wordCountDisplay) wordCountDisplay.textContent = wordCount;
    if (durationDisplay) durationDisplay.textContent = formatSeconds(durationSec);
  }

  function resetStartPosition() {
    currentX = containerWidth;
    list.style.transform = `translate3d(${currentX}px,0,0)`;
  }

  function applyModeVisibility() {
    if (sliderControl) {
      sliderControl.classList.toggle('hidden', speedMode === SPEED_MODE.wpm);
    }
    if (wpmControl) {
      wpmControl.classList.toggle('hidden', speedMode !== SPEED_MODE.wpm);
    }
  }

  function refreshTargetSpeed() {
    let durationSec = 0;
    if (speedMode === SPEED_MODE.wpm) {
      targetSpeed = computeWpmSpeed();
      if (wpmValue) wpmValue.textContent = `${wpmSelect.value} сл/мин`;
      durationSec = wordCount ? computeWpmDuration() : 0;
    } else {
      targetSpeed = computeSliderSpeed();
      speedValue.textContent = `${speedRange.value}/9`;
      durationSec = wordCount ? computeSliderDuration() : 0;
    }
    updateStats(durationSec);
  }

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

    if (!list.firstElementChild) {
      requestAnimationFrame(tick);
      return;
    }

    if (currentX + listWidth <= 0) {
      resetStartPosition();
    }

    list.style.transform = `translate3d(${currentX}px,0,0)`;
    requestAnimationFrame(tick);
  }

  // Инициализация
  function init() {
    updateMeasurements();
    applyModeVisibility();
    updateTickLabels();
    setSliderForSliderMode();
    resetStartPosition();
    refreshTargetSpeed();
    displayedSpeed = targetSpeed;
    requestAnimationFrame(tick);
  }

  // Управление паузой
  pauseBtn.addEventListener('click', () => {
    running = !running;
    pauseBtn.querySelector('.warn').textContent = running ? 'Пауза' : 'Пуск';
  });

  // Изменение скорости
  speedRange.addEventListener('input', () => {
    if (speedMode === SPEED_MODE.slider) {
      if (speedValue) speedValue.textContent = `${speedRange.value}/9`;
    } else {
      syncWpmWithSlider();
    }
    refreshTargetSpeed();
  });

  // Переключение режимов скорости
  modeRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (!radio.checked) return;
      speedMode = radio.value === SPEED_MODE.wpm ? SPEED_MODE.wpm : SPEED_MODE.slider;
      applyModeVisibility();
       if (speedMode === SPEED_MODE.wpm) {
         syncSliderWithWpm();
       } else {
         setSliderForSliderMode();
       }
       updateTickLabels();
      refreshTargetSpeed();
    });
  });

  // Выбор слов в минуту
  wpmSelect?.addEventListener('change', () => {
    if (wpmValue) wpmValue.textContent = `${wpmSelect.value} сл/мин`;
    if (speedMode === SPEED_MODE.wpm) {
      syncSliderWithWpm();
    }
    if (speedMode === SPEED_MODE.wpm) refreshTargetSpeed();
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

      wordCount = countWords(text);
      updateMeasurements();
      resetStartPosition();
      refreshTargetSpeed();

      // Если анимация была на паузе — запустим
      if (!running) {
        running = true;
        pauseBtn.querySelector('.warn').textContent = 'Пауза';
      }
    };
    reader.readAsText(file, 'utf-8');
  };

  // Адаптация при ресайзе (для корректного расчёта расстояния в режиме WPM)
  window.addEventListener('resize', () => {
    updateMeasurements();
    refreshTargetSpeed();
  });

  init();
})();
