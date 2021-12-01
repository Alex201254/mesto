import './index.css';
import {Card} from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import { initialCards, elementsCont, profileForm, profilePopup, newCardPopup,  imagePopup, newCardForm, editBtn, addBtn, user, status, name, statuss} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';

const image = new PopupWithImage(imagePopup);
const inform = new UserInfo(name, statuss);
const popupWithProfileForm = new PopupWithForm(profilePopup,
  (formData) =>  {
    inform.setUserInfo(formData);
})
const popupWithCardForm = new PopupWithForm(newCardPopup,
  (formData) => {
    const newCard = new Card({name: formData['place-input'], link: formData['link-input']}, '.card-template', () => image.open({name: formData['place-input'], link: formData['link-input']}));
    const cardEl = newCard.generateCard();
    cardList.addItem(cardEl);
  })

editBtn.addEventListener('click',()=> {
  const infoUser = inform.getUserInfo();
  user.value = infoUser.name;
  status.value = infoUser.info;
  popupWithProfileForm.open();
  formValProf.resetValidation();});

addBtn.addEventListener('click', ()=> {
  popupWithCardForm.open();
  formValPlace.resetValidation()});

const cardList = new Section({
  data: initialCards,
  renderer:(item) => {
    const card = new Card(item, '.card-template', () => image.open(item));
    const cardElement = card.generateCard();
    cardList.addItem(cardElement)
  }
  }, elementsCont);

  cardList.renderItems();

const formValProf = new FormValidator({
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_inactive',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
}, profileForm);

const formValPlace = new FormValidator({
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_inactive',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
}, newCardForm);

formValProf.enableValidation();
formValPlace.enableValidation();


