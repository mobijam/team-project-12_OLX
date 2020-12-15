import { refs } from './modal';
import search from '../templates/search.hbs';
import auth from '../templates/auth-form.hbs';
// import makeCall from '../templates/create-call.hbs';

export default function chooseModal() {
  const checkType = refs.modalContent.dataset.action;
  if (checkType === 'search') {
    refs.modalInner.insertAdjacentHTML('beforeend', search());
    console.log('true');
  }
  if (checkType === 'login') {
    refs.modalInner.insertAdjacentHTML('beforeend', auth());
  }
  if (checkType === 'create') {
    refs.modalInner.insertAdjacentHTML('beforeend', makeCall());
  }
}
