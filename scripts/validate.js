const showInputError = (formElement, inputElement, errorMessage, inputErr, error) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErr);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(error);
};

const hideInputError = (formElement, inputElement, inputErr, error) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErr);
  errorElement.classList.remove(error);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErr, error) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErr, error);
  } else {
    hideInputError(formElement, inputElement, inputErr, error);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, inactiveBtn) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true)
    buttonElement.classList.add(inactiveBtn);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(inactiveBtn);
  }
};

const setEventListeners = (formElement, input, submitBtn, inactiveBtn, inputErr, error) => {
  const inputList = Array.from(formElement.querySelectorAll(input));
  const buttonElement = formElement.querySelector(submitBtn);
  const atrib = formElement.getAttribute('name');
  if(atrib === 'form-place')
    toggleButtonState(inputList, buttonElement, inactiveBtn);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErr, error);
      toggleButtonState(inputList, buttonElement, inactiveBtn);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement,obj.inputSelector, obj.submitButtonSelector, obj.inactiveButtonClass, obj.inputErrorClass, obj.errorClass);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_inactive',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
});
