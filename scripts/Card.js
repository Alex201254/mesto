import  {openModalWindow} from './index.js';
const imagePopup = document.querySelector('.popup_image');
const popupImg = imagePopup.querySelector('.popup__image');
const popupPlace = imagePopup.querySelector('.popup__place');

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
    popupImg.alt = this._name;
    popupPlace.textContent = this._name;
    openModalWindow(imagePopup);
  }

  _setEventListeners() {
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleOpenPopup();
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

export {imagePopup, Card};
