'use strict';

const el = [...document.querySelectorAll('.population')];

const populations = el.map((item) =>
  Number(item.textContent.replaceAll(',', '')),);

function getTotal() {
  let total = 0;

  for (let i = 0; i < populations.length; i++) {
    total += populations[i];
  }

  return total;
}

function getAverage() {
  let sum = 0;

  for (const country of populations) {
    sum += country;
  }

  return sum / populations.length;
}

document.querySelector('.total-population').textContent =
  getTotal().toLocaleString();

document.querySelector('.average-population').textContent =
  getAverage().toLocaleString();
