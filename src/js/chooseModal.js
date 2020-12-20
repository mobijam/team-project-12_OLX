import { refs } from './modal';
import search from '../templates/search.hbs';
import auth from '../templates/auth-form.hbs';
// import makeCall from '../templates/create-call.hbs';
import favorTmpl from '../templates/favorite-item-card.hbs';
// import makeCall from '../templates/create-call.hbs';

export default function chooseModal(checkType) {
  // let checkType = refs.modalContent.dataset.action;
  refs.modalContent.innerHTML = '';

  if (checkType === 'search') {
    refs.modalContent.insertAdjacentHTML('beforeend', search());
  }
  if (checkType === 'login') {
    // refs.modalContent.insertAdjacentHTML('beforeend', login());
    refs.modalContent.innerHTML = `<h1> Шаблон для модалки ${checkType} вставляется в chooseModal.js</h1>`;
  }
  if (checkType === 'logout') {
    // refs.modalContent.insertAdjacentHTML('beforeend', logOut());
    refs.modalContent.innerHTML = `<h1>  Шаблон для модалки ${checkType} вставляется в chooseModal.js</h1>`;
  }
  if (checkType === 'create') {
    // refs.modalContent.insertAdjacentHTML('beforeend', createCall());
    refs.modalContent.innerHTML = `<h1>  Шаблон для модалки ${checkType} вставляется в chooseModal.js</h1>`;
  }
  if (checkType === 'edit-call') {
    // refs.modalContent.insertAdjacentHTML('beforeend', editCall());
    refs.modalContent.innerHTML = `<h1>  Шаблон для модалки ${checkType} вставляется в chooseModal.js</h1>`;
  }
  if (checkType === 'favorites') {
    refs.modalContent.innerHTML = `<h1>  Шаблон для модалки ${checkType} вставляется в chooseModal.js</h1>`;
    // refs.modalContent.insertAdjacentHTML('beforeend', favorites());
  }
  if (checkType === 'my-calls') {
    refs.modalContent.innerHTML = `<h1>  Шаблон для модалки ${checkType} вставляется в chooseModal.js</h1>`;
    // refs.modalContent.insertAdjacentHTML('beforeend', myCall());
  }
  if (checkType === 'favorite') {
    refs.modalForm.insertAdjacentHTML('afterend', favorTmpl());
  }
}
