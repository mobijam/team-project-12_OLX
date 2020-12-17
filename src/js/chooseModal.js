import { refs } from './modal';
import search from '../templates/search.hbs';
import auth from '../templates/auth-form.hbs';
// import makeCall from '../templates/create-call.hbs';

export default function chooseModal(checkType) {
  // let checkType = refs.modalContent.dataset.action;
  refs.modalContent.innerHTML = '';

  if (checkType === 'search') {
    refs.modalContent.insertAdjacentHTML('beforeend', search());
  }
  if (checkType === 'login') {
    // refs.modalContent.insertAdjacentHTML('beforeend', login());
    refs.modalContent.innerHTML = `<h1> Модалка ${checkType}</h1>`;
  }
  if (checkType === 'logout') {
    console.log('LogOut');
    // refs.modalContent.insertAdjacentHTML('beforeend', logOut());
    refs.modalContent.innerHTML = `<h1> Модалка ${checkType}</h1>`;
  }
  if (checkType === 'create') {
    console.log('make-call');
    // refs.modalContent.insertAdjacentHTML('beforeend', createCall());
    refs.modalContent.innerHTML = `<h1> Модалка ${checkType}</h1>`;
  }
  if (checkType === 'edit-call') {
    console.log('edit-call');
    // refs.modalContent.insertAdjacentHTML('beforeend', editCall());
    refs.modalContent.innerHTML = `<h1> Модалка ${checkType}</h1>`;
  }
  if (checkType === 'favorites') {
    console.log('favorites');
    refs.modalContent.innerHTML = `<h1> Модалка ${checkType}</h1>`;
    // refs.modalContent.insertAdjacentHTML('beforeend', favorites());
  }
  if (checkType === 'my-calls') {
    console.log('my-calls');
    refs.modalContent.innerHTML = `<h1> Модалка ${checkType}</h1>`;
    // refs.modalContent.insertAdjacentHTML('beforeend', myCall());
  }
}
