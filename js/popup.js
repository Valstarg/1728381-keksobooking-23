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
  if (!element.author.avatar) {
    adsAvatar.remove();
  }
  else {
    adsAvatar.src = element.author.avatar;
  }

  const adsTitle = adsElement.querySelector('.popup__title');
  if (!element.offer.title) {
    adsTitle.remove();
  }
  else {
    adsTitle.textContent = element.offer.title;
  }

  const adsAddress = adsElement.querySelector('.popup__text--address');
  if (!element.offer.address) {
    adsAddress.remove();
  }
  else {
    adsAddress.textContent = element.offer.address;
  }

  const adsPrice = adsElement.querySelector('.popup__text--price');
  if (!element.offer.price) {
    adsPrice.remove();
  }
  else {
    adsPrice.textContent = `${element.offer.price} ₽/ночь`;
  }

  const adsType = adsElement.querySelector('.popup__type');
  if (!typeRu[element.offer.type]) {
    adsType.remove();
  }
  else {
    adsType.textContent = typeRu[element.offer.type];
  }

  const adsCapacity = adsElement.querySelector('.popup__text--capacity');
  if (!element.offer.rooms || !element.offer.guests) {
    adsCapacity.remove();
  }
  else {
    adsCapacity.textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  }

  const adsTime = adsElement.querySelector('.popup__text--time');
  if (!element.offer.checkin || !element.offer.checkout) {
    adsTime.remove();
  }
  else {
    adsTime.textContent = `Заезд после ${element.offer.checkin}, выезд после ${element.offer.checkout}`;
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
  if (!element.offer.description) {
    adsDescription.remove();
  }
  else {
    adsDescription.textContent = element.offer.description;
  }

  const adsPhotos = adsElement.querySelector('.popup__photos');
  if (!element.offer.photos) {
    adsPhotos.remove();
  }
  else {
    element.offer.photos.forEach((photo) => {
      const photoElement = document.createElement('img');
      photoElement.src = photo;
      photoElement.classList.add('popup__photo');
      photoElement.width = 45;
      photoElement.height = 40;
      photoElement.alt = 'Фотография жилья';
      adsPhotos.appendChild(photoElement);
    });
  }
  return adsElement;
}

mapCanvas.appendChild(getAds(similarData[0]));
