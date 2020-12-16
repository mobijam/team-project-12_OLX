import { refs } from './modal';
import search from '../templates/search.hbs';
import auth from '../templates/auth-form.hbs';
// import makeCall from '../templates/create-call.hbs';
import favorTmpl from '../templates/favorite-item-card.hbs';
// import makeCall from '../templates/create-call.hbs';

export default function chooseModal() {
  const checkType = refs.modalContent.dataset.action;
  if (checkType === 'search') {
    refs.modalContent.insertAdjacentHTML('beforeend', search());
    console.log('search');
  }
  if (checkType === 'login') {
    refs.modalContent.insertAdjacentHTML('beforeend', auth());
  }
  if (checkType === 'logout') {
    console.log('LogOut');
    // refs.modalContent.insertAdjacentHTML('beforeend', logOut());
  }
  if (checkType === 'create') {
    console.log('make-call');
    // refs.modalContent.insertAdjacentHTML('beforeend', makeCall());
  }
  if (checkType === 'edit-call') {
    console.log('edit-call');
    // refs.modalContent.insertAdjacentHTML('beforeend', editCall());
  }
  if (checkType === 'favorites') {
    console.log('favorites');
    // refs.modalContent.insertAdjacentHTML('beforeend', favorites());
  }
  if (checkType === 'my-calls') {
    console.log('my-calls');
    // refs.modalContent.insertAdjacentHTML('beforeend', my-calls());
  }
  if (checkType === 'favorite') {
    refs.modalForm.insertAdjacentHTML('afterend', favorTmpl());
  }
}
