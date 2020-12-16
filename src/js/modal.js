import checkType from './chooseModal';
export const refs = {
  modal: document.querySelector('[data-modal]'),
  modalContent: document.querySelector('[data-modal-content]'),

  openModalSearchBtn: document.querySelector('[data-action="search"]'),
  openModalSearchBtnMobile: document.querySelector(
    '[data-action="mobile-search"]',
  ),

  accountLoginBtn: document.querySelector('[data-action="login"]'),
  accountLoginBtnMobile: document.querySelector('[data-action="mobile-login"]'),

  accountLogoutBtn: document.querySelector('[data-action="logout"]'),
  accountLogoutBtnMobile: document.querySelector(
    '[data-action="mobile-logout"]',
  ),

  openModalCreateBtn: document.querySelector('[data-action="create"]'),
  openModalCreateBtnMobile: document.querySelector(
    '[data-action="mobile-create"]',
  ),

  // openModalEditCallBtn: document.querySelector('[data-action="edit-call"]'),
  // openModalEditCallBtnMobile: document.querySelector('[data-action="mobile-edit-call"]'),

  // openModalFavoritesBtn: document.querySelector('[data-action="favorites"]'),
  // openModalFaforitesBtnMobile: document.querySelector('[data-action="mobile-favorites"]'),

  // openModalMyCallsBtn: document.querySelector('[data-action="my-calls"]'),
  // openModalMyCallsBtnMobile: document.querySelector('[data-action="mobile-my-calls"]'),

  accountBtn: document.querySelector('[data-action="account"]'),
  accountBtnMobile: document.querySelector('[data-action="mobile-account"]'),

  accountMenuMobile: document.querySelector(
    '[data-action="mobile-account-nav"]',
  ),

  closeModalBtn: document.querySelector('[data-action="modal-close"]'),
};

export default function openModal(e) {
  checkLogin();

  let type = '';
  if (
    e.currentTarget.dataset.action === 'search' ||
    e.currentTarget.dataset.action === 'mobile-search'
  ) {
    type = 'search';
  }

  if (
    e.currentTarget.dataset.action === 'login' ||
    e.target.dataset.action === 'mobile-login'
  ) {
    type = 'login';
  }

  if (
    e.currentTarget.dataset.action === 'logout' ||
    e.currentTarget.dataset.action === 'mobile-logout'
  ) {
    type = 'logout';
  }

  if (
    e.currentTarget.dataset.action === 'create' ||
    e.currentTarget.dataset.action === 'mobile-create'
  ) {
    type = 'create';
  }

  if (
    e.currentTarget.dataset.action === 'edit-call' ||
    e.currentTarget.dataset.action === 'mobile-edit-call'
  ) {
    type = 'edit-call ';
  }

  if (
    e.currentTarget.dataset.action === 'favorites' ||
    e.currentTarget.dataset.action === 'mobile-favorites'
  ) {
    type = 'favorites';
  }

  if (
    e.currentTarget.dataset.action === 'my-calls' ||
    e.currentTarget.dataset.action === 'mobile-my-calls'
  ) {
    type = 'my-calls';
  }
  toggleModal();
  refs.modalContent.setAttribute('data-action', `${type}`);
  console.dir(e.currentTarget.dataset.action);
  checkType();
}

refs.openModalSearchBtn.addEventListener('click', openModal);
refs.openModalSearchBtnMobile.addEventListener('click', openModal);

refs.accountLoginBtn.addEventListener('click', openModal);
refs.accountLoginBtnMobile.addEventListener('click', openModal);

refs.accountLogoutBtn.addEventListener('click', openModal);
refs.accountLogoutBtnMobile.addEventListener('click', openModal);

refs.openModalCreateBtn.addEventListener('click', openModal);
refs.openModalCreateBtnMobile.addEventListener('click', openModal);

// refs.openModalEditCallBtn.addEventListener('click', openModal);
// refs.openModalEditCallBtnMobile.addEventListener('click', openModal);

// refs.openModalFavoritesBtn.addEventListener('click', openModal);
// refs.openModalFaforitesBtnMobile.addEventListener('click', openModal);

// refs.openModalMyCallsBtn.addEventListener('click', openModal);
// refs.openModalMyCallsBtnMobile.addEventListener('click', openModal);

refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modalContent.innerHTML = '';
  if (refs.modalContent.hasAttribute('data-action')) {
    refs.modalContent.removeAttribute('data-action');
  }
  document.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function checkLogin() {
  const checkAuth = localStorage.getItem('key');

  if (checkAuth !== null) {
    refs.openModalCreateBtn.removeAttribute('data-action');
    refs.openModalCreateBtn.setAttribute('data-action', 'create');
    refs.openModalCreateBtnMobile.removeAttribute('data-action');
    refs.openModalCreateBtnMobile.setAttribute('create', 'mobile-create');

    refs.accountLogoutBtn.classList.remove('hidden');
    refs.accountLogoutBtnMobile.classList.remove('hidden');
    refs.accountLoginBtn.classList.add('hidden');
    refs.accountLoginBtnMobile.classList.add('hidden');
    refs.accountBtn.classList.remove('hidden');
    refs.accountBtnMobile.classList.remove('hidden');
    refs.accountMenuMobile.classList.remove('hidden');
  }
  if (checkAuth === null) {
    refs.openModalCreateBtn.removeAttribute('data-action');
    refs.openModalCreateBtn.setAttribute('data-action', 'login');
    refs.openModalCreateBtnMobile.removeAttribute('data-action');
    refs.openModalCreateBtnMobile.setAttribute('data-action', 'mobile-login');
    refs.accountLogoutBtn.classList.add('hidden');
    refs.accountLogoutBtnMobile.classList.add('hidden');
    refs.accountLoginBtn.classList.remove('hidden');
    refs.accountLoginBtnMobile.classList.remove('hidden');
    refs.accountBtn.classList.add('hidden');
    refs.accountBtnMobile.classList.add('hidden');
    refs.accountMenuMobile.classList.add('hidden');
  }
}
checkLogin();
