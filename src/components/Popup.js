export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add('popup_is-opened');
    this.setEventListeners();
  }

  close() {
    this._popupSelector.classList.remove('popup_is-opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.querySelector('.popup__close').addEventListener('click', () => this.close());
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.currentTarget === evt.target){
        this.close();
      }
    })
  }
}
