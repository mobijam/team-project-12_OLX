//const { async } = require("q");
//Валидация и отправка форм

const addForm = document.querySelector('.add-modal-form')
const validateBtn = addForm.querySelector('.button-add')
const addInputs = addForm.querySelectorAll('.add-input')
addForm.addEventListener('submit', addFormValidate); 
async function addFormValidate(e) {
  e.preventDefault();
    removeValidation();
function removeValidation() {
    let errorsValid = addForm.querySelectorAll('.add-valid-error');
   console.log(errorsValid);
    for (let i = 0; i < errorsValid.length; i++) {
        errorsValid[i].remove();
    } 
}  
    for (let i = 0; i < addInputs.length; i++) {
        let errorMarkup = `<p class="add-valid-error">* can't be empty</p>`;
        if (!addInputs[i].value) {
          console.log('input is blank', addInputs[i]);
            addInputs[i].insertAdjacentHTML('afterend', errorMarkup);
        }     
    }
}
  const accessToken = sessionStorage.getItem('token');
  async function formSend(e) {
    e.preventDefault();
    let error = addFormValidate(addForm);
  if (error === 0) {
    const formdata = new FormData(addForm);
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);
  }
  const options = {
    method: 'POST',
    headers: {
      'Media-Type': 'application/json',
    },
    body: JSON.stringify(e),
    redirect: 'follow',
  }; 
  return fetch(`${BASE_URL}/call`, options)
  .then(res => res.json())
  .then(result => {
    console.log(result);
    onCloseModal();
  })
  .catch(error => console.log('error', error));
}  

//Открытие модалки "Додати оголошення" и закрытие тремя способами

//const refs = {
  //openModalBtn: document.querySelector('[data-action="open-modal"]'),
  //closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  //addModalBtn: document.querySelector('[data-action="submit-modal"]'),
  //backdrop: document.querySelector('.js-backdrop'),
//};

//refs.openModalBtn.addEventListener('click', onOpenModal);
//refs.closeModalBtn.addEventListener('click', onCloseModal);
//refs.addModalBtn.addEventListener('click', addFormValidate);
//refs.addModalBtn.addEventListener('click', formSend);
//refs.backdrop.addEventListener('click', onBackdropClick);

//function onOpenModal() {
  //window.addEventListener('keydown', onEscKeyPress);
  //document.body.classList.add('show-modal');
//}
//function onCloseModal() {
  //window.removeEventListener('keydown', onEscKeyPress);
  //document.body.classList.remove('show-modal');
//}
//function onBackdropClick(event) {
  //if (event.currentTarget === event.target) {
    //console.log('Кликнули именно в бекдроп!!!!');
    //onCloseModal();
  //}
//}
//function onEscKeyPress(event) {
  //const ESC_KEY_CODE = 'Escape';
  //const isEscKey = event.code === ESC_KEY_CODE;
  //if (isEscKey) {
    //onCloseModal();
  //}
//}
//Категории в выпадашке модалки "Додати оголошення"
const BASE_URL = `https://callboard-backend.herokuapp.com`;
const addCategory = document.querySelector('.js-category-input');
addCategory.addEventListener('click', renderCategoriesList);
// Функция делает запрос на бэк по категориям, массив в ответе
function fetchCategories() {
  return fetch(`${BASE_URL}/call/categories`)
    .then(res => {
      return res.json();
    })
}
//Функция добавляет разметку выпадающего списка в модалку "Додати оголошення"
function renderCategoriesList() {
  let categoryMarkup = ``;
  fetchCategories().then((categories) => {
    for (let category of categories){
      categoryMarkup += `<option value="${category}" class="js-add-category">${category}</option> `;
    }
    addCategory.insertAdjacentHTML('beforeend', categoryMarkup);
    addCategory.removeEventListener('click', renderCategoriesList);
   })
    .catch(error => console.log(error));
}
// загрузка фото
const formImage = document.querySelector('.add-photo');
const formPreview = document.querySelector('.file-preview-add');

formImage.addEventListener('change', () => {
  uploadFile(formImage.files[0]);
});

function uploadFile(file) {
  
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    alert('Only images!');
    formImage.value = '';
    return;
  }
  if (file.size > 3 * 1024 * 1024) {
    alert('The file is to big!');
    return;
  }

  let reader = new FileReader();
  reader.onload = function(e) {
  formPreview.insertAdjacentHTML(
    'beforeend',
    `<li class="file-preview-item"><img src="${e.target.result}" alt="" /></li>`,
  );

  };
  reader.onerror = function(e) {
  alert('Error');
  };
  reader.readAsDataURL(file);
}

formPreview.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const remove = confirm('Delete file?');
    if (remove) {
      e.target.parentNode.remove();
    }
  }
});

