'use strict';

const defaultSets = {
  3: {
    c1: ['вы', 'вос', 'вс', 'воз', 'вз'],
    c2: ['пл', 'сов', 'клад', 'кид', 'дел', 'нюх', 'колд'],
    c3: ['ёвывать', 'овывать', 'ивывать', 'евывать', 'ывывать'],
  },
  2: {
    c1: ['под', 'при', 'пере', 'раз', 'вы', 'до'],
    c2: ['писать', 'читать', 'думать', 'ехать', 'плыть', 'смотреть'],
  },
};

let textsC1 = [];
let textsC2 = [];
let textsC3 = [];

let idx1 = 0;
let idx2 = 0;
let idx3 = 0;
let currentMode = 3;

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const modeSelect = document.getElementById('modeSelect');

function setMode(mode) {
  currentMode = mode;

  textsC1 = defaultSets[mode].c1.slice();
  textsC2 = defaultSets[mode].c2.slice();
  textsC3 = mode === 3 ? defaultSets[3].c3.slice() : [];

  idx1 = 0;
  idx2 = 0;
  idx3 = 0;

  c3.classList.toggle('hidden', mode === 2);
  render();
}

function render() {
  c1.textContent = textsC1[idx1] || '';
  c2.textContent = textsC2[idx2] || '';

  if (currentMode === 3) {
    c3.textContent = textsC3[idx3] || '';
  } else {
    c3.textContent = '';
  }
}

function nextIndex(index, list) {
  if (!list.length) {
    return 0;
  }
  return (index + 1) % list.length;
}

function clickHandlerC1() {
  idx1 = nextIndex(idx1, textsC1);
  render();
}

function clickHandlerC2() {
  idx2 = nextIndex(idx2, textsC2);
  render();
}

function clickHandlerC3() {
  if (currentMode !== 3) {
    return;
  }
  idx3 = nextIndex(idx3, textsC3);
  render();
}

function parseInputLists(raw) {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const expectedLines = currentMode;
  if (lines.length !== expectedLines) {
    return {
      ok: false,
      message: `Для режима ${currentMode} части(ей) в файле должно быть ${expectedLines} строк(и).`,
    };
  }

  const parsed = lines.map((line) =>
    line
      .split(',')
      .map((chunk) => chunk.trim())
      .filter(Boolean)
  );

  if (parsed.some((list) => list.length === 0)) {
    return {
      ok: false,
      message: 'Каждая строка файла должна содержать хотя бы один элемент.',
    };
  }

  if (currentMode === 2) {
    return { ok: true, c1: parsed[0], c2: parsed[1], c3: [] };
  }

  return { ok: true, c1: parsed[0], c2: parsed[1], c3: parsed[2] };
}

function readFile(input) {
  const file = input.files && input.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.readAsText(file);

  reader.onload = function onLoad() {
    const parsed = parseInputLists(String(reader.result || ''));
    if (!parsed.ok) {
      alert(parsed.message);
      return;
    }

    textsC1 = parsed.c1;
    textsC2 = parsed.c2;
    textsC3 = parsed.c3;

    idx1 = 0;
    idx2 = 0;
    idx3 = 0;

    render();
  };

  reader.onerror = function onError() {
    alert('Не удалось прочитать файл.');
  };
}

c1.addEventListener('click', clickHandlerC1);
c2.addEventListener('click', clickHandlerC2);
c3.addEventListener('click', clickHandlerC3);
modeSelect.addEventListener('change', function onModeChange() {
  const mode = Number(modeSelect.value);
  setMode(mode === 2 ? 2 : 3);
});

setMode(3);

window.readFile = readFile;
