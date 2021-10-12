const modalWindow = document.querySelector('.popup');
const modalWindow1 = document.querySelector('.new-place_popup');
const modalWindow2 = document.querySelector('.place_popup');
const popupContent = document.querySelectorAll('.popup__content');
const modalWindowCloseBtn = document.querySelectorAll('.popup__close');
const editBtn = document.querySelector('.profile__edit-button');
const caption = document.querySelector('.profile__caption');
const form1 = modalWindow.querySelector('.form');
const form2 = modalWindow1.querySelector('.form');
const user = form1.querySelector('.form__text_type_name');
const status = form1.querySelector('.form__text_type_status');
const place = form2.querySelector('.form__text_type_name');
const link = form2.querySelector('.form__text_type_status');
const name = document.querySelector('.profile__name');
const statuss = document.querySelector('.profile__status');
const addBtn = document.querySelector('.profile__add-button');
const elementsCont = document.querySelector('.elements__container');
const elementTemplate = document.querySelector('#card-template').content;
const elementPhoto = elementTemplate.querySelector('.element__photo');
const popupImg = modalWindow2.querySelector('.popup__image');
const popupPlace = modalWindow2.querySelector('.popup__place');



function openModalWindow(popup) {
  popup.classList.add('popup_is-opened');
  if(popup === modalWindow) {
    user.value = name.textContent;
    status.value = statuss.textContent;
  }
}

function closeModalWindow(popup) {
  popup.classList.remove('popup_is-opened');
}

editBtn.addEventListener('click',()=> openModalWindow(modalWindow));
addBtn.addEventListener('click', ()=> openModalWindow(modalWindow1));
modalWindowCloseBtn[0].addEventListener('click',()=> closeModalWindow(modalWindow));
modalWindowCloseBtn[1].addEventListener('click',()=> closeModalWindow(modalWindow1));
modalWindowCloseBtn[2].addEventListener('click',()=> closeModalWindow(modalWindow2));



function saveUser(evt) {
  evt.preventDefault();
  name.textContent = user.value;
  statuss.textContent = status.value;
  closeModalWindow(modalWindow);
}

function renderElement(placeValue, linkValue) {
  const el = elementTemplate.querySelector('.element').cloneNode(true);
  el.querySelector('.element__photo').src = linkValue;
  el.querySelector('.element__place').textContent = placeValue;
  const elementLike = el.querySelector('.element__like');
  elementLike.addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__like_active');
  })
  const elementDel = el.querySelector('.element__delete');
  elementDel.addEventListener('click', function() {
    const listItem = elementDel.closest('.element');
    listItem.remove();
  })
  const elementPhoto = el.querySelector('.element__photo');
  elementPhoto.addEventListener('click', ()=> {
    popupImg.src = linkValue;
    popupPlace.textContent = placeValue;
    openModalWindow(modalWindow2);
  });
  if(placeValue === place.value){
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
  closeModalWindow(modalWindow1);
}

form1.addEventListener('submit', saveUser);
form2.addEventListener('submit', saveImg);

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

for (let i = 0; i < initialCards.length; i++) {
  renderElement(initialCards[i].name, initialCards[i].link);
}


