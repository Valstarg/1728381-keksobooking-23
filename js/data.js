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
  'Отличная квартира для туристов.',     // Заголовки и описания помещений придумаю позже.
  'Для пар и молодоженов.',
  'Великолепные апартаменты для людей со вкусом.',
  'Отель. Множество номеров на любой вкус и кошелёк.',
  'Элитное жильё на берегу моря.',
  'Простая квартира',
  'Только для требовательных и знающих себе цену людей.',
  'Пентхаус в центре города.',
  'Обычный дом. Три комнаты.',
  'Комната в общежитии.'];

const descriptions = [
  'Квартира-студия в центре города! ',
  'Уютная небольшая квартирка в спальном районе города.',
  'Этот дворец построен специально для Вас! Бассейн, джакузи, автоматический бар и многое другое.',
  'Всё просто и очень уютненько. Подробности по телефону.',
  'Стоит один раз увидеть, и вы не захотите уезжать отсюда!',
  'Красивейшее место города. Вся инфраструктура в шаговой доступности.',
  'Вы искали что-нибудь особенное? Поздравляем! Отличные виды, выход к морю и заповеднику, бесплатная парковка.',
  'Лучший отдых, который вы себе можете позволить. Ремонт в стиле HI-Tech. Все удобства.',
  'Сдаётся хороший домик без излишеств. Спокойный тихий район.',
  'Ничего необычного. Все вопросы по телефону. Приезжим скидки.'];

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
