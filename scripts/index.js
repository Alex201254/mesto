const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const editBtn = document.querySelector('.profile__edit-button');
const saveBtn = modalWindow.querySelector('.form__submit-btn_action_save');
const caption = document.querySelector('.profile__caption');
const form = modalWindow.querySelector('.input');
const user = modalWindow.querySelector('.input__text_type_name');
const status = modalWindow.querySelector('.input__text_type_status');
const name = document.querySelector('.profile__name');
const statuss = document.querySelector('.profile__status');

function toggleModalWindow() {
  modalWindow.classList.toggle('popup_is-opened');
  user.value = name.textContent;
  status.value = statuss.textContent;
}

editBtn.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindow);

function saveUser(evt) {
  evt.preventDefault();
  name.textContent = user.value;
  statuss.textContent = status.value;
  toggleModalWindow();
}

form.addEventListener('submit', saveUser);
