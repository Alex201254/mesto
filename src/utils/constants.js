export const profilePopup = document.querySelector('.popup_profile');
export const newCardPopup = document.querySelector('.popup_new-card');
export const profileCloseBtn = profilePopup.querySelector('.popup__close');
export const newCardCloseBtn = newCardPopup.querySelector('.popup__close');
export const editBtn = document.querySelector('.profile__edit-button');
export const profileForm = profilePopup.querySelector('.form');
export const newCardForm = newCardPopup.querySelector('.form');
export const user = profileForm.querySelector('.form__text_type_name');
export const status = profileForm.querySelector('.form__text_type_status');
export const place = newCardForm.querySelector('.form__text_type_name');
export const link = newCardForm.querySelector('.form__text_type_status');
export const name = document.querySelector('.profile__name');
export const statuss = document.querySelector('.profile__status');
export const addBtn = document.querySelector('.profile__add-button');
export const elementsCont = document.querySelector('.elements__container');
export const imagePopup = document.querySelector('.popup_image');
export const config = {
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_inactive',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
};
export const imageCloseBtn = imagePopup.querySelector('.popup__close');
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const popupImg = imagePopup.querySelector('.popup__image');
export const popupPlace = imagePopup.querySelector('.popup__place');
