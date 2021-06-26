// ПЕРЕМЕННЫЕ И МАССИВЫ.

const PRICE_MIN = 1000;
const PRICE_MAX = 5000;

const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

// ФУНКЦИИ.

// Генерация случайного целого числа из переданного диапозона включительно.
// Значение "До" не может быть меньше "От",но может быть равно ему.
// Принимаются только положительные значения.
// При не соблюдении условий выводится предупредительное сообщение.

function getRandomNumber(from, before) {
  const randomNumber = Math.random() * (before - from + 1) + from;
  if (from >= 0 && before > 0 && from <= before) {
    return Math.floor(randomNumber);
  }
  else {
    return 'Введённые данные не соответствуют условиям.';
  }
}

// Генерация случайного целого числа с плавующей точкой.
// Значение "До" не может быть меньше "От",но может быть равно ему.
// Принимаются только положительные значения.
// Колличество знаков после точки задается переменной "accuracy"
// "accuracy" не может принимать отрицательное значение и не привышает 10.
// При не соблюдении условий выводится предупредительное сообщение.

function getRandomFracter(from, before, accuracy) {
  const initialValue = Math.random() * (before - from) + from;
  const randomFracter = parseFloat(initialValue.toFixed(accuracy));
  if (from >= 0 && before > 0 && from <= before && 10 >= accuracy > 0) {
    return randomFracter;
  }
  else {
    return 'Введённые данные не соответствуют условиям.';
  }
}

// Генерация случайного элемента массива.
// "array" - имя используемого массива.

function getRandomArrayElement(array) {
  const randomNumber = getRandomNumber(0, array.length - 1);
  return array[randomNumber];
}

// Генерация массива случайной длинны из указанного массива.
// "array" - имя используемого массива.

function getRandomArray(array) {
  const randomNumber = getRandomNumber(0, array.length);
  const arrayClone = array.slice();
  const arrayNew = [];
  let arrayRandomNumber = 0;

  // eslint-disable-next-line id-length
  for (let i = 0; i < randomNumber; i++) {
    arrayRandomNumber = getRandomNumber(0, arrayClone.length - 1);
    arrayNew[i] = arrayClone[arrayRandomNumber];
    arrayClone.splice(arrayRandomNumber, 1);
  }
  return arrayNew;
}

// Генерация массива со случайными элементами по данным из других массивов.

const location = {
  lat: getRandomFracter(35.65000, 35.70000, 5),
  lng: getRandomFracter(139.70000, 139.80000, 5),
};

function createDataArray() {
  const randomData = [];
  // eslint-disable-next-line id-length
  for (let j = 0; j < 10; j++) {
    randomData[j] = {
      author: {
        //avatar: 'img/avatars/user' + ('0' + (j + 1)).slice(-2) + '.png',    Не могу понять почему ругается линтер.
        avatar: `img/avatars/user${ (`0${ j + 1 }`).slice(-2)  }.png`,
      },
      offer: {
        title: 'Заголовок предложения.',
        //address: 'Широта: ' + location.lat + ', ' + 'долгота: ' + location.lng,    Тоже самое.
        address: `Широта: ${ location.lat }, долгота: ${ location.lng }`,
        price: getRandomNumber(PRICE_MIN, PRICE_MAX),
        type: getRandomArrayElement(type),
        rooms: getRandomNumber(1, 5),
        guests: getRandomNumber(1, 10),
        checkin: getRandomArrayElement(checkin),
        checkout: getRandomArrayElement(checkout),
        features: getRandomArray(features),
        description: 'Описание помещения.',
        photos: getRandomArray(photos),
      },
      location: {
        lat: getRandomFracter(35.65000, 35.70000, 5),
        lng: getRandomFracter(139.70000, 139.80000, 5),
      },
    };
  }
  return randomData;
}

createDataArray(10);
