// ПЕРЕМЕННЫЕ, МАССИВЫ, ОБЪЕКТЫ.

const adForm = document.querySelector('.ad-form');
const adFormList = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const selectForm = mapFilters.querySelectorAll('select');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const numberOfGuest = document.querySelector('#capacity');
const guestsList = numberOfGuest.querySelectorAll('option');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

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

// Обработчик событий и валидация форм.
// Заголовок объявления.

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
// Поправил валидацию, пункты становятся неактивными,а не удаляются.
// Валидация работает корректно.

roomNumber.addEventListener('change',()=>{
  for ( let i=0 ; i < guestsList.length; i++ ){
    if (Number(roomNumber.value)===MAX_ROOMS) {
      if (i===4){
        guestsList[i].selected=true;
        guestsList[i].disabled=false;
      } else {
        guestsList[i].disabled=true;
      }
    } else {
      guestsList[4-Number(roomNumber.value)].selected=true;
      if (i>=(4-Number(roomNumber.value)) && i<=3){
        guestsList[i].disabled=false;
      } else {
        guestsList[i].disabled=true;
      }
    }
  }
});

// Синхронизация времени заезда и выезда. А синхронизация времени ни во второй части задания должна быть?

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

// Второй вариант синхронизации времени.

/*function timing(first, second) {
  first.value = second.value;
}
timeIn.addEventListener('change', () => {
  timing(timeOut, timeIn);
});
timeOut.addEventListener('change', () => {
  timing(timeIn, timeOut);
});*/
