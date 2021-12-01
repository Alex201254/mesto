export default class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._obj.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._obj.inputErrorClass);
    errorElement.classList.remove(this._obj.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._obj.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._obj.inactiveButtonClass);
    }
  };

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._obj.inputSelector));
    const buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
    }

  resetValidation() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._obj.inputSelector));
    const buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
    }
}

