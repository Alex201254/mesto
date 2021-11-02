import {imagePopup, imageCloseBtn, Card} from './Card.js';
import FormValidator from './FormValidator.js';

const profilePopup = document.querySelector('.popup_profile');
const newCardPopup = document.querySelector('.popup_new-card');
const profileCloseBtn = profilePopup.querySelector('.popup__close');
const newCardCloseBtn = newCardPopup.querySelector('.popup__close');
const editBtn = document.querySelector('.profile__edit-button');
const profileForm = profilePopup.querySelector('.form');
const newCardForm = newCardPopup.querySelector('.form');
const user = profileForm.querySelector('.form__text_type_name');
const status = profileForm.querySelector('.form__text_type_status');
const place = newCardForm.querySelector('.form__text_type_name');
const link = newCardForm.querySelector('.form__text_type_status');
const name = document.querySelector('.profile__name');
const statuss = document.querySelector('.profile__status');
const addBtn = document.querySelector('.profile__add-button');
const elementsCont = document.querySelector('.elements__container');
const subbtn = newCardForm.querySelector('.form__submit-btn');

function clickOverlay(evt) {
  const evtTarget = evt.target;
  closeModalWindow(evtTarget);
}

const hideErrors = () => {
  const errText = Array.from(document.querySelectorAll('.form__text-error'));
  errText.forEach((err) => {
    err.classList.remove('form__text-error_active');
    err.textContent = '';
  })
  const inputs = Array.from(document.querySelectorAll('.form__text'));
  inputs.forEach((input) => {
    input.classList.remove('form__text_type_error');
  })
  const subbtn = document.querySelector('.form__submit-btn');
  subbtn.removeAttribute('disabled');
  subbtn.classList.remove('form__submit-btn_inactive');
}

function openModalWindow(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
  popup.addEventListener('click', clickOverlay);
  hideErrors();
}

function closeModalWindow(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
  popup.removeEventListener('click', clickOverlay);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closeModalWindow(openedPopup);
  }
}

editBtn.addEventListener('click',()=> {
  user.value = name.textContent;
  status.value = statuss.textContent;
  openModalWindow(profilePopup)});

addBtn.addEventListener('click', ()=> {
  subbtn.setAttribute('disabled', true);
  subbtn.classList.add('form__submit-btn_inactive');
  openModalWindow(newCardPopup)});

profileCloseBtn.addEventListener('click',()=> closeModalWindow(profilePopup));
newCardCloseBtn.addEventListener('click',()=> closeModalWindow(newCardPopup));
imageCloseBtn.addEventListener('click',()=> closeModalWindow(imagePopup));





function saveUser(evt) {
  evt.preventDefault();
  name.textContent = user.value;
  statuss.textContent = status.value;
  closeModalWindow(profilePopup);
}



function renderElement(el, prepend=true) {
  const card = new Card(el, '.card-template');
  const cardElement = card.generateCard();
  if(prepend){
    elementsCont.prepend(cardElement);
  }else{
    elementsCont.append(cardElement);
  }
}

function saveImg(evt) {
  evt.preventDefault();
  renderElement({name: place.value, link: link.value});
  place.value = '';
  link.value = '';
  closeModalWindow(newCardPopup);
  subbtn.setAttribute('disabled', true);
  subbtn.classList.add('form__submit-btn_inactive');
}

profileForm.addEventListener('submit', saveUser);
newCardForm.addEventListener('submit', saveImg);

const initialCards = [
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

initialCards.forEach(item => renderElement(item));

const elementsForm = document.querySelectorAll('.form');
elementsForm.forEach(formelement => {
  const formVal = new FormValidator({
    formSelector: '.form',
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit-btn',
    inactiveButtonClass: 'form__submit-btn_inactive',
    inputErrorClass: 'form__text_type_error',
    errorClass: 'form__text-error_active'
  }, formelement);
  const form = formVal.enableValidation();
})

export {openModalWindow};
