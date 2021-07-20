import {getRandomNumber, getRandomFracter, getRandomArrayElement, getRandomArray, cutRandomElement} from './util.js';

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

const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'];

const checkin = [
  '12:00',
  '13:00',
  '14:00'];

const checkout = [
  '12:00',
  '13:00',
  '14:00'];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const titles = [
  'Заголовок предложения.',     // Заголовки и описания помещений придумаю позже.
  'Заголовок предложения 2.',
  'Заголовок предложения 3.',
  'Заголовок предложения 4.',
  'Заголовок предложения 5.',
  'Заголовок предложения 6.',
  'Заголовок предложения 7.',
  'Заголовок предложения 8.',
  'Заголовок предложения 9.',
  'Заголовок предложения 10.'];

const descriptions = [
  'Описание помещения.',
  'Описание помещения 2.',
  'Описание помещения 3.',
  'Описание помещения 4.',
  'Описание помещения 5.',
  'Описание помещения 6.',
  'Описание помещения 7.',
  'Описание помещения 8.',
  'Описание помещения 9.',
  'Описание помещения 10.'];

const avatars = [];
for (let i = 1; i <= NUMBER_OF_ADS; i++) {
  if (i < NUMBER_OF_ADS) {
    avatars.push(`img/avatars/user0${i}.png`);
  } else {
    avatars.push(`img/avatars/user${i}.png`);
  }
}

// ФУНКЦИИ.

// Генерация одного элемента.

function createDataObject() {
  const location = {
    lat: getRandomFracter(LAT_MIN, LAT_MAX, ACCURACY),
    lng: getRandomFracter(LNG_MIN, LNG_MAX, ACCURACY),
  };
  return {
    author: {
      avatar: cutRandomElement(avatars),
    },
    offer: {
      title: getRandomArrayElement(titles),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(PRICE_MIN, PRICE_MAX),
      type: getRandomArrayElement(type),
      rooms: getRandomNumber(ROOMS_MIN, ROOMS_MAX),
      guests: getRandomNumber(GUESTS_MIN, GUESTS_MAX),
      checkin: getRandomArrayElement(checkin),
      checkout: getRandomArrayElement(checkout),
      features: getRandomArray(features),
      description: getRandomArrayElement(descriptions),
      photos: getRandomArray(photos),
    },
    location: {
      lat: getRandomFracter(LAT_MIN, LAT_MAX, ACCURACY),
      lng: getRandomFracter(LNG_MIN, LNG_MAX, ACCURACY),
    },
  };
}

// Генерация массива.

const createDataArray = new Array(NUMBER_OF_ADS).fill(null).map(createDataObject);

export {createDataArray};
