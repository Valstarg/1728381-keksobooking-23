import {createDataArray} from './data.js';

// ПЕРЕМЕННЫЕ, МАССИВЫ, ОБЪЕКТЫ.

const typeRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const mapCanvas = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content;
const similarPopup = cardTemplate.querySelector('.popup');
const similarData = createDataArray;

// ФУНКЦИИ.

// Заполнение объявления данными.

function getAds(element) {
  const adsElement = similarPopup.cloneNode(true);

  const adsAvatar = adsElement.querySelector('.popup__avatar');
  adsAvatar.src = element.author.avatar;
  if (!element.author.avatar) {
    adsAvatar.remove();
  }

  const adsTitle = adsElement.querySelector('.popup__title');
  adsTitle.textContent = element.offer.title;
  if (!element.offer.title) {
    adsTitle.remove();
  }

  const adsAddress = adsElement.querySelector('.popup__text--address');
  adsAddress.textContent = element.offer.address;
  if (!element.offer.address) {
    adsAddress.remove();
  }

  const adsPrice = adsElement.querySelector('.popup__text--price');
  adsPrice.textContent = `${element.offer.price} ₽/ночь`;
  if (!element.offer.price) {
    adsPrice.remove();
  }

  const adsType = adsElement.querySelector('.popup__type');
  adsType.textContent = typeRu[element.offer.type];
  if (!typeRu[element.offer.type]) {
    adsType.remove();
  }

  const adsCapacity = adsElement.querySelector('.popup__text--capacity');
  adsCapacity.textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  if (!element.offer.rooms || !element.offer.guests) {
    adsCapacity.remove();
  }

  const adsTime = adsElement.querySelector('.popup__text--time');
  adsTime.textContent = `Заезд после ${element.offer.checkin}, выезд после ${element.offer.checkout}`;
  if (!element.offer.checkin || !element.offer.checkout) {
    adsTime.remove();
  }

  const adsFeatures = adsElement.querySelector('.popup__features');
  const modifiers = element.offer.features.map((feature) => `popup__feature--${feature}`);
  adsFeatures.querySelectorAll('.popup__feature').forEach((classItem) => {
    const modifier = classItem.classList[1];
    if (!modifiers.includes(modifier)) {
      classItem.remove();
    }
  });

  const adsDescription = adsElement.querySelector('.popup__description');
  adsDescription.textContent = element.offer.description;
  if (!element.offer.description) {
    adsDescription.remove();
  }

  const adsPhotos = adsElement.querySelector('.popup__photos');
  element.offer.photos.forEach((photo) => {
    const photoElement = document.createElement('img');
    photoElement.src = photo;
    photoElement.classList.add('popup__photo');
    photoElement.width = 45;
    photoElement.height = 40;
    photoElement.alt = 'Фотография жилья';
    adsPhotos.appendChild(photoElement);
  });
  if (!element.offer.photos) {
    adsPhotos.remove();
  }
  return adsElement;
}

mapCanvas.appendChild(getAds(similarData[0]));
