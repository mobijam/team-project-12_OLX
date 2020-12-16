import checkType from './chooseModal';

export const refs = {
  openModalSearchBtn: document.querySelector('[data-modal-search]'),
  openModalSearchMobileBtn: document.querySelector(
    '[data-modal-search-mobile]',
  ),

  openModalFavBtn: document.querySelector('[data-modal-favorite]'),
  // openModalFavMobileBtn: document.querySelector('[data-modal-favorite-mobile]'),
  // openModalLoginBtn: document.querySelector('[data-modal-login]'),
  // openModalLoginMobileBtn: document.querySelector(
  //   '[data-action="register-mobile"]',
  // ),
  // openModalCreateBtn: document.querySelector('[data-modal-create]'),
  // openModalCreateMobileBtn: document.querySelector(
  //   '[data-modal-create-mobile]',
  // ),

  closeModalBtn: document.querySelector('[data-action="modal-close"]'),

  modal: document.querySelector('[data-modal]'),
  modalContent: document.querySelector('[data-modal-content]'),
  modalForm: document.querySelector('[data-modal-form]'),
};

export default function openModal(e) {
  // checkLogin();

  let type = '';
  if (
    e.currentTarget.hasAttribute('data-modal-search') ||
    e.currentTarget.hasAttribute('data-modal-search-mobile')
  ) {
    type = 'search';
  }
  if (
    e.currentTarget.hasAttribute('data-modal-create') ||
    e.currentTarget.hasAttribute('data-modal-create-mobile')
  ) {
    type = 'create';
  }

  if (
    e.currentTarget.hasAttribute('data-modal-login') ||
    e.currentTarget.hasAttribute('data-modal-login-mobile')
  ) {
    type = 'login';
  }

  if (
    e.currentTarget.hasAttribute('data-modal-favorite') ||
    e.currentTarget.hasAttribute('data-modal-favorite-mobile')
  ) {
    type = 'favorite';
  }

  toggleModal();
  refs.modalContent.setAttribute('action', `${type}`);
  checkType();
  refs.modalContent.children[1].textContent = ` `;
}

refs.openModalSearchBtn.addEventListener('click', openModal);
refs.openModalSearchMobileBtn.addEventListener('click', openModal);

// refs.openModalLoginBtn.addEventListener('click', openModal);
// refs.openModalLoginMobileBtn.addEventListener('click', openModal);
// refs.openModalLoginBtn.addEventListener('click', checkLogin);

// refs.openModalCreateBtn.addEventListener('click', openModal);
// refs.openModalCreateMobileBtn.addEventListener('click', openModal);

refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modalForm.innerHTML = '';
  if (refs.modalContent.hasAttribute('action')) {
    refs.modalContent.removeAttribute('action');
  }
  document.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

// function checkLogin() {
//   const checkAuth = localStorage.getItem('key');

//   if (checkAuth !== null) {
//     refs.openModalLoginBtn.removeEventListener('click', openModal);
//     refs.openModalLoginMobileBtn.removeEventListener('click', openModal);
//     refs.openModalCreateBtn.removeAttribute('data-modal-login');
//     refs.openModalCreateBtn.setAttribute('data-modal-create', '');
//     refs.openModalCreateMobileBtn.removeAttribute('data-modal-login-mobile');
//     refs.openModalCreateMobileBtn.setAttribute('data-modal-create-mobile', '');
//   }
//   if (checkAuth === null) {
//     refs.openModalCreateBtn.removeAttribute('data-modal-create');
//     refs.openModalCreateBtn.setAttribute('data-modal-login', '');
//     refs.openModalCreateMobileBtn.removeAttribute('data-modal-create-mobile');
//     refs.openModalCreateMobileBtn.setAttribute('data-modal-login-mobile', '');
//     refs.openModalLoginBtn.addEventListener('click', openModal);
//     refs.openModalLoginMobileBtn.addEventListener('click', openModal);
//   }
// }

// checkLogin();
