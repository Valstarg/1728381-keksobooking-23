// ПЕРЕМЕННЫЕ, МАССИВЫ, ОБЪЕКТЫ.

const adForm = document.querySelector('.ad-form');
const adFormList = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const selectForm = mapFilters.querySelectorAll('select');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const numberOfGuest = document.querySelector('#capacity');

const TITLE_MIN = 30;
const TITLE_MAX = 100;
const PRICE_MAX = 1000000;
const MAX_ROOMS = 100;

// ФУНКЦИИ.

function addDisabled(element, bool) {
  for (let i = 0; i < element.length; i++) {
    element[i].disabled = bool;
  }
}

// Неактивное состояние.

function makeDisabledForm() {
  adForm.classList.add('ad-form--disabled');
  addDisabled(adFormList, true);
  mapFilters.classList.add('ad-form--disabled');
  addDisabled(selectForm, true);
}
makeDisabledForm();

// Активное состояние.

function makeActiveForm() {
  adForm.classList.remove('ad-form--disabled');
  addDisabled(adFormList, false);
  mapFilters.classList.remove('ad-form--disabled');
  addDisabled(selectForm, false);
}
makeActiveForm();

// Обработчик событий и валидация форм. Заголовок объявления.

titleInput.addEventListener('input', () => {
  const titleLength = titleInput.value.length;
  if (titleLength < TITLE_MIN) {
    titleInput.setCustomValidity(`Минимальный размер текста(с пробелами): ${TITLE_MIN - titleLength}`);
  }
  else if (titleLength > TITLE_MAX) {
    titleInput.setCustomValidity(`Текст привышает допустимый размер. Удалите лишние символы: ${titleLength - TITLE_MAX}`);
  }
  else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

// Цена за ночь.

priceInput.setAttribute('max', PRICE_MAX);

// Колличество комнат и мест.

const defaultOptions = [...numberOfGuest.options];
roomNumber.addEventListener('change', function () {
  const selectedOption = this.options[this.selectedIndex];
  numberOfGuest.innerHTML = '';
  if (+selectedOption.value === MAX_ROOMS) {
    numberOfGuest.append(defaultOptions[3]);
  }
  else {
    numberOfGuest.append(...defaultOptions.filter((option) => option.value <= selectedOption.value & option.value > 0));
  }
});
