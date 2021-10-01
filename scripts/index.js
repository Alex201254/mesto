const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const editBtn = document.querySelector('.profile__edit-button');
const caption = document.querySelector('.profile__caption');
const form = modalWindow.querySelector('.form');
const user = modalWindow.querySelector('.form__text_type_name');
const status = modalWindow.querySelector('.form__text_type_status');
const name = document.querySelector('.profile__name');
const statuss = document.querySelector('.profile__status');

function openModalWindow() {
  modalWindow.classList.add('popup_is-opened');
  user.value = name.textContent;
  status.value = statuss.textContent;
}

function closeModalWindow() {
  modalWindow.classList.remove('popup_is-opened');
}

editBtn.addEventListener('click', openModalWindow);
modalWindowCloseBtn.addEventListener('click', closeModalWindow);

function saveUser(evt) {
  evt.preventDefault();
  name.textContent = user.value;
  statuss.textContent = status.value;
  closeModalWindow();
}

form.addEventListener('submit', saveUser);
