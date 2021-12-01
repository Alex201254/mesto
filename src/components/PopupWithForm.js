import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    this._popupSelector.querySelector('.form').reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.querySelector('.form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  _getInputValues() {
    this._inputList = document.querySelectorAll('.form__text');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
}
