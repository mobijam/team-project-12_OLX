// import checkType from './chooseModal'; вернуть
export const refs = {
  openModalSearchBtn: document.querySelector('[data-modal-search]'),
  openModalSearchMobileBtn: document.querySelector(
    '[data-modal-search-mobile]',
  ),

  openModalCreateBtn: document.querySelector('[data-modal-create]'),
  openModalCreateMobileBtn: document.querySelector(
    '[data-modal-create-mobile]',
  ),
  closeModalBtn: document.querySelector('[data-action="modal-close"]'),

  modal: document.querySelector('[data-modal]'),
  modalContent: document.querySelector('[data-modal-content]'),
  modalForm: document.querySelector('[data-modal-form]'),

  accountBtn: document.querySelector('[data-action-account]'),
  accountMobileBtn: document.querySelector('[data-action-account-mobile]'),

  accountLogoutBtn: document.querySelector('[data-action-logout]'),
  accountLogoutMobileBtn: document.querySelector('[data-action-logout-mobile]'),
  accountRegisterBtn: document.querySelector('[data-modal-login]'),
  accountRegisterMobileBtn: document.querySelector('[data-modal-login-mobile]'),
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
    e.currentTarget.hasAttribute('data-action-logout') ||
    e.currentTarget.hasAttribute('data-action-logout-mobile')
  ) {
    type = 'logout';
  }
  console.dir(e.currentTarget);
  toggleModal();
  refs.modalContent.setAttribute('action', `${type}`);
  // checkType(); вернуть
  refs.modalContent.children[1].textContent = `МОДАЛОЧКА ${type}`;
}

refs.openModalSearchBtn.addEventListener('click', openModal);
refs.openModalSearchMobileBtn.addEventListener('click', openModal);

refs.accountRegisterBtn.addEventListener('click', openModal);
refs.accountRegisterMobileBtn.addEventListener('click', openModal);

refs.openModalCreateBtn.addEventListener('click', openModal);
refs.openModalCreateMobileBtn.addEventListener('click', openModal);

refs.accountLogoutBtn.addEventListener('click', openModal);
refs.accountLogoutMobileBtn.addEventListener('click', openModal);

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
//     refs.openModalCreateBtn.removeAttribute('data-modal-login');
//     refs.openModalCreateBtn.setAttribute('data-modal-create', '');
//     refs.openModalCreateMobileBtn.removeAttribute('data-modal-login-mobile');
//     refs.openModalCreateMobileBtn.setAttribute('data-modal-create-mobile', '');

//     refs.accountRegisterBtn.removeEventListener('click', openModal);
//     refs.accountRegisterMobileBtn.removeEventListener('click', openModal);
//     refs.accountLogoutBtn.classList.remove('hidden');
//     refs.accountLogoutMobileBtn.classList.remove('hidden');
//     refs.accountRegisterBtn.classList.add('hidden');
//     refs.accountBtn.classList.remove('hidden');
//     refs.accountMobileBtn.classList.remove('hidden');
//   }
//   if (checkAuth === null) {
//     refs.openModalCreateBtn.removeAttribute('data-modal-create');
//     refs.openModalCreateBtn.setAttribute('data-modal-login', '');
//     refs.openModalCreateMobileBtn.removeAttribute('data-modal-create-mobile');
//     refs.openModalCreateMobileBtn.setAttribute('data-modal-login-mobile', '');
//     refs.accountRegisterBtn.addEventListener('click', openModal);
//     refs.accountRegisterMobileBtn.addEventListener('click', openModal);
//     refs.accountLogoutBtn.classList.add('hidden');
//     refs.accountLogoutMobileBtn.classList.add('hidden');
//     refs.accountRegisterBtn.classList.remove('hidden');
//     refs.accountBtn.classList.add('hidden');
//     refs.accountMobileBtn.classList.add('hidden');
//   }
// }
// checkLogin();
