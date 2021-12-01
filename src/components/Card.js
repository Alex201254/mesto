class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    this._element.querySelector('.element__photo').addEventListener('click', this._handleCardClick);
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

export {Card};
