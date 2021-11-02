import  {openModalWindow} from './index.js';
const imagePopup = document.querySelector('.popup_image');
const imageCloseBtn = imagePopup.querySelector('.popup__close');
const popupImg = imagePopup.querySelector('.popup__image');
const popupPlace = imagePopup.querySelector('.popup__place');
const elementTemplate = document.querySelector('.card-template').content;
const elementPhoto = elementTemplate.querySelector('.element__photo');

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

  return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;
    this._element.querySelector('.element__place').textContent = this._name;
    return this._element;
  }

  _handleOpenPopup() {
    popupImg.src = this._link;
    popupPlace.textContent = this._name;
    openModalWindow(imagePopup);
  }

  _handleClosePopup() {
    elementPhoto.src = this._link;
    imagePopup.classList.remove('popup_is-opened');
  }

  _setEventListeners() {
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleOpenPopup();
    })
    imageCloseBtn.addEventListener('click', () => {
      this._handleClosePopup();
    })
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      const eventTarget = evt.target;
      eventTarget.classList.toggle('element__like_active');
    })
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      const listItem = this._element.querySelector('.element__delete').closest('.element');
      listItem.remove();
    })
  }
}

export {imagePopup, imageCloseBtn, Card};
