import refs from './refsForEditCard';

//const { async } = require("q");
//Валидация форм
// const addForm = document.querySelector('.edit-modal-form');
// const validateBtn = addForm.querySelector('.button-edit');
// const addInputs = addForm.querySelectorAll('.edit-input');
// addForm.addEventListener('submit', addFormValidate);
// function addFormValidate(evt) {
//   evt.preventDefault();
//   removeValidation();
//   for (let i = 0; i < addInputs.length; i++) {
//     let errorMarkup = `<p class="edit-valid-error">* can't be empty</p>`;
//     if (!addInputs[i].value) {
//       console.log('input is blank', addInputs[i]);
//       addInputs[i].parentElement.insertAdjacentHTML('afterend', errorMarkup);
//     }
//   }
// }
// function removeValidation() {
//   let errorsValid = addForm.querySelectorAll('.edit-valid-error');
//   console.log(errorsValid);
//   for (let i = 0; i < errorsValid.length; i++) {
//     errorsValid[i].remove();
//   }
// }


// //Открытие модалки и закрытие тремя способами

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.addModalBtn.addEventListener('click', addFormValidate);
refs.cancelModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModal();
  }
}
//Категории в выпадашке модалки "Додати оголошення"
const BASE_URL = `https://callboard-backend.herokuapp.com`;
const addCategory = document.querySelector('.js-category-input');
addCategory.addEventListener('click', renderCategoriesList);
// Функция делает запрос на бэк по категориям, массив в ответе
function fetchCategories() {
  return fetch(`${BASE_URL}/call/categories`).then(res => {
    return res.json();
  });
}
//Функция добавляет разметку выпадающего списка в модалку "Додати оголошення"
function renderCategoriesList() {
  let categoryMarkup = ``;
  fetchCategories()
    .then(categories => {
      for (let category of categories) {
        categoryMarkup += `<option value="${category}" class="js-edit-category">${category}</option> `;
      }
      addCategory.insertAdjacentHTML('beforeend', categoryMarkup);
      addCategory.removeEventListener('click', renderCategoriesList);
    })
    .catch(error => console.log(error));
}
// загрузка фото
const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');
formImage.addEventListener('change', () => {
  uploadFile(formImage.files[0]);
});
function uploadFile(file) {
  console.log(file);
  let reader = new FileReader();
  reader.onload = function (e) {
    formPreview.innerHTML =
      ('beforeend',
      `<li class="file_preview"><img src='${e.target.result}' alt="" /></li>`);
  };
  reader.onerror = function (e) {
    alert('Error');
  };
  reader.readAsDataURL(file);
}
//отправка
// validateBtn.addEventListener('click', qwerty);
// function qwerty(call) {
//   console.log(call);
//   if (errorsValid === 0) {
//     onCloseModal();
//   }
// }
// async function addCall(call) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Media-Type': 'application/json',
//     },
//     body: JSON.stringify(call),
//   };
//   return fetch(`${BASE_URL}/calls`, options).then(res => res.json());
// }
// function renderCall(call) {
//   console.log('Пришел ответ от бекенда');
//   console.log(call);
// }
// function fetchCalls() {
//   return fetch(`${BASE_URL}/calls`).then(res => res.json());
// }
// function fetchCallById(callId) {
//   return fetch(`${BASE_URL}/calls/${callId}`).then(res => res.json());
// }
