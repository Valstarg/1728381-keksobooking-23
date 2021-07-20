// ПЕРЕМЕННЫЕ, МАССИВЫ, ОБЪЕКТЫ.

const adForm = document.querySelector('.ad-form');
const adFormList = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const selectForm = mapFilters.querySelectorAll('select');

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
