import {getRandomNumber, getRandomFracter, getRandomArrayElement, getRandomArray} from './util.js';

// ПЕРЕМЕННЫЕ, МАССИВЫ, ОБЪЕКТЫ.

const PRICE_MIN = 1000;
const PRICE_MAX = 5000;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const ACCURACY = 5;
const NUMBER_OF_ADS = 10;
const ROOMS_MIN = 1;
const ROOMS_MAX = 5;
const GUESTS_MIN = 1;
const GUESTS_MAX = 10;

const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

// ФУНКЦИИ.

// Генерация массива со случайными элементами по данным из других массивов.

function createDataArray() {
  const randomData = [];
  for (let j = 0; j < NUMBER_OF_ADS; j++) {
    const location = {
      lat: getRandomFracter(LAT_MIN, LAT_MAX, ACCURACY),
      lng: getRandomFracter(LNG_MIN, LNG_MAX, ACCURACY),
    };
    randomData.push({
      author: {
        avatar: `img/avatars/user${ (`0${ j + 1 }`).slice(-2) }.png`,
      },
      offer: {
        title: 'Заголовок предложения.',
        address: `${ location.lat }, ${ location.lng }`,
        price: getRandomNumber(PRICE_MIN, PRICE_MAX),
        type: getRandomArrayElement(type),
        rooms: getRandomNumber(ROOMS_MIN, ROOMS_MAX),
        guests: getRandomNumber(GUESTS_MIN, GUESTS_MAX),
        checkin: getRandomArrayElement(checkin),
        checkout: getRandomArrayElement(checkout),
        features: getRandomArray(features),
        description: 'Описание помещения.',
        photos: getRandomArray(photos),
      },
      location: {
        lat: getRandomFracter(LAT_MIN, LAT_MAX, ACCURACY),
        lng: getRandomFracter(LNG_MIN, LNG_MAX, ACCURACY),
      },
    });
  }
  return randomData;
}

export {createDataArray};
