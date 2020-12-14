import { refs } from './modal';
import search from '../templates/search.hbs';
import auth from '../templates/auth-form.hbs';
import makeCall from '../templates/create-call.hbs'; 

export default function chooseModal() {
  const checkType = refs.modalContent.getAttribute('action');
  console.log(checkType);
  if (checkType === 'search') {
    refs.modalForm.insertAdjacentHTML('beforeend', search());
  }
  if (checkType === 'login') {
    refs.modalForm.insertAdjacentHTML('afterend', auth());
  }
  if (checkType === 'create') {
    refs.modalForm.insertAdjacentHTML('afterend', makeCall());
  }
}
