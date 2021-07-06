import {createDataArray} from './data.js';
import {checkTextContent, checkChildrenElements} from './util.js';

// ПЕРЕМЕННЫЕ, МАССИВЫ, ОБЪЕКТЫ.

const typeRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;
const similarPopup = cardTemplate.querySelector('.popup');
const generatedAdsArray = createDataArray();

// ФУНКЦИИ.

// Заполнение объявлений данными.

generatedAdsArray.forEach((address) => {
  const addressElement = similarPopup.cloneNode(true);

  const addressAvatar = addressElement.querySelector('.popup__avatar');
  addressAvatar.src = address.author.avatar;

  const addressTitle = addressElement.querySelector('.popup__title');
  addressTitle.textContent = address.offer.title;

  const addressTextAddress = addressElement.querySelector('.popup__text--address');
  addressTextAddress.textContent = address.offer.address;

  const addressTextPrice = addressElement.querySelector('.popup__text--price');
  addressTextPrice.textContent = `${address.offer.price} ₽/ночь`;

  const addressType = addressElement.querySelector('.popup__type');
  addressType.textContent = typeRu[address.offer.type];

  const addressTextCapacity = addressElement.querySelector('.popup__text--capacity');
  addressTextCapacity.textContent = `${address.offer.rooms} комнаты для ${address.offer.guests} гостей`;

  const addressTextTime = addressElement.querySelector('.popup__text--time');
  addressTextTime.textContent = `Заезд после ${address.offer.checkin}, выезд до ${address.offer.checkout}`;

  const addressDescription = addressElement.querySelector('.popup__description');
  addressDescription.textContent = address.offer.description;

  const addressPhotos = addressElement.querySelector('.popup__photos');

  address.offer.photos.forEach((photo) => {
    const photoElement = document.createElement('img');
    photoElement.src = photo;
    photoElement.classList.add('popup__photo');
    photoElement.width = 45;
    photoElement.height = 40;
    photoElement.alt = 'Фотография жилья';
    addressPhotos.appendChild(photoElement);
  });

  const addressFeatures = addressElement.querySelector('.popup__features');

  address.offer.features.forEach((feature) => {
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
    addressFeatures.appendChild(featureElement);
  });

  checkTextContent(addressTitle);
  checkTextContent(addressTextAddress);
  checkTextContent(addressTextPrice);
  checkTextContent(addressType);
  checkTextContent(addressTextCapacity);
  checkTextContent(addressTextTime);
  checkTextContent(addressDescription);
  checkChildrenElements(addressFeatures);
  checkChildrenElements(addressPhotos);

  mapCanvas.appendChild(addressElement);
});
