const profilePopup = document.querySelector('.popup_profile');
const newCardPopup = document.querySelector('.popup_new-card');
const imagePopup = document.querySelector('.popup_image');
const profileCloseBtn = profilePopup.querySelector('.popup__close');
const newCardCloseBtn = newCardPopup.querySelector('.popup__close');
const imageCloseBtn = imagePopup.querySelector('.popup__close');
const editBtn = document.querySelector('.profile__edit-button');
const caption = document.querySelector('.profile__caption');
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
const elementTemplate = document.querySelector('#card-template').content;
const elementPhoto = elementTemplate.querySelector('.element__photo');
const popupImg = imagePopup.querySelector('.popup__image');
const popupPlace = imagePopup.querySelector('.popup__place');
const page = document.querySelector('.root');

function clickOverlay(evt) {
  const evtTarget = evt.target;
  closeModalWindow(evtTarget);
}

function openModalWindow(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape); 
  popup.addEventListener('click', clickOverlay);
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

addBtn.addEventListener('click', ()=> openModalWindow(newCardPopup));
profileCloseBtn.addEventListener('click',()=> closeModalWindow(profilePopup));
newCardCloseBtn.addEventListener('click',()=> closeModalWindow(newCardPopup));
imageCloseBtn.addEventListener('click',()=> closeModalWindow(imagePopup));





function saveUser(evt) {
  evt.preventDefault();
  name.textContent = user.value;
  statuss.textContent = status.value;
  closeModalWindow(profilePopup);
}

function createCard(placeValue, linkValue) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = element.querySelector('.element__photo');
  cardImage.src = linkValue;
  cardImage.alt = placeValue;
  element.querySelector('.element__place').textContent = placeValue;
  const elementLike = element.querySelector('.element__like');
  elementLike.addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__like_active');
  })
  const elementDel = element.querySelector('.element__delete');
  elementDel.addEventListener('click', function() {
    const listItem = elementDel.closest('.element');
    listItem.remove();
  })
  cardImage.addEventListener('click', ()=> {
    cardImage.alt = placeValue;
    popupImg.src = linkValue;
    popupPlace.textContent = placeValue;
    openModalWindow(imagePopup);
  })
  return element;
}

function renderElement(placeValue, linkValue, prepend=true) {
  const el = createCard(placeValue, linkValue);
  if(prepend){
    elementsCont.prepend(el);
  }else{
    elementsCont.append(el);
  }
}

function saveImg(evt) {
  evt.preventDefault();
  renderElement(place.value, link.value);
  place.value = '';
  link.value = '';
  closeModalWindow(newCardPopup);
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

initialCards.forEach(item => renderElement(item.name, item.link));


