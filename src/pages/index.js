import './index.css';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import { initialCards, config, elementsCont, profileForm, profilePopup, newCardPopup,  imagePopup, newCardForm, editBtn, addBtn, user, status, name, statuss} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import createCard from '../utils/utils.js';

const image = new PopupWithImage(imagePopup);
image.setEventListeners();
const inform = new UserInfo(name, statuss);
const popupWithProfileForm = new PopupWithForm(profilePopup,
  (formData) =>  {
    inform.setUserInfo(formData);
})
popupWithProfileForm.setEventListeners();
const popupWithCardForm = new PopupWithForm(newCardPopup,
  (formData) => {
    const newCard = createCard({name: formData['place-input'], link: formData['link-input']}, '.card-template', () => image.open({name: formData['place-input'], link: formData['link-input']}))
    cardList.addItem(newCard);
  })
  popupWithCardForm.setEventListeners();

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
    const card = createCard(item, '.card-template', () => image.open(item));
    cardList.addItem(card)
  }
  }, elementsCont);

  cardList.renderItems();

const formValProf = new FormValidator(config, profileForm);
const formValPlace = new FormValidator(config, newCardForm);

formValProf.enableValidation();
formValPlace.enableValidation();


