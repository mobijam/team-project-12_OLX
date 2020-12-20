import checkType from './chooseModal';

export const refs = {
  modal: document.querySelector('[data-modal]'),
  modalWindow: document.querySelector('[data-modal-window]'),
  modalContent: document.querySelector('[data-modal-content]'),

  openModalSearchBtn: document.querySelector('[data-action="search"]'),
  openModalSearchBtnMobile: document.querySelector('[data-action="mobile-search"]'),

  accountLoginBtn: document.querySelector("[data-action='login']"),
  accountLoginBtnMobile: document.querySelector("[data-action='mobile-login']"),

  accountLogoutBtn: document.querySelector("[data-action='logout']"),
  accountLogoutBtnMobile: document.querySelector("[data-action='mobile-logout']"),

  openModalCreateBtn: document.querySelector("[data-action='create']"),
  openModalCreateBtnMobile: document.querySelector("[data-action='mobile-create']"),

  // openModalEditCallBtn: document.querySelector('[data-action="edit-call"]'), // нужна карточка с кнопкой
  // openModalEditCallBtnMobile: document.querySelector("[data-action='mobile-edit-call']"), //нужна карточка с кнопкой

  openModalFavoritesBtn: document.querySelector('[data-action="favorites"]'),
  openModalFaforitesBtnMobile: document.querySelector('[data-action="mobile-favorites"]'),

  openModalMyCallsBtn: document.querySelector('[data-action="my-calls"]'),
  openModalMyCallsBtnMobile: document.querySelector('[data-action="mobile-my-calls"]'),

  accountBtn: document.querySelector('[data-action="account"]'),
  accountBtnMobile: document.querySelector('[data-action="mobile-account"]'),

  accountMenuMobile: document.querySelector('[data-action="mobile-account-nav"]'),

  closeModalBtn: document.querySelector('[data-action="modal-close"]'),
};

function openModal(e) {
  const choose = () => {
    return e.currentTarget.dataset.action;
  };
  showModal(choose());
}

export default function showModal(action) {
  // checkLogin();

  let type = '';

  if (action === 'search' || action === 'mobile-search') {
    type = 'search';
  } else if (action === 'login' || action === 'mobile-login') {
    type = 'login';
  } else if (action === 'logout' || action === 'mobile-logout') {
    type = 'logout';
  } else if (action === 'create' || action === 'mobile-create') {
    type = 'create';
    console.log(type);
  } else if (action === 'edit-call' || action === 'mobile-edit-call') {
    type = 'edit-call';
  } else if (action === 'favorites' || action === 'mobile-favorites') {
    type = 'favorites';
  } else if (action === 'my-calls' || action === 'mobile-my-calls') {
    type = 'my-calls';
  }
  refs.modalWindow.setAttribute('data-action', `${type}`);
  // toggleModal();

  document.body.classList.add('modal-open');
  refs.modal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  checkType(type);

  //Закрытие модалки
  refs.modal.addEventListener('click', closeModal);
  window.addEventListener('keydown', onWindowKeydown);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function onWindowKeydown(e) {
    if (e.code == 'Escape') {
      closeModal(e);
    }
  }

  function closeModal(e) {
    if (
      e.code === 'Escape' ||
      e.currentTarget.dataset.action === 'modal-close' ||
      e.target.hasAttribute('data-modal')
    ) {
      if (refs.modalWindow.hasAttribute('data-action')) {
        refs.modalWindow.removeAttribute('data-action');
      }
      document.body.classList.remove('modal-open');
      refs.modal.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');

      window.removeEventListener('keydown', onWindowKeydown);
      refs.modal.removeEventListener('click', closeModal);
      refs.closeModalBtn.addEventListener('click', closeModal);
    }
  }
}

refs.openModalSearchBtn.addEventListener('click', openModal);
refs.openModalSearchBtnMobile.addEventListener('click', openModal);

refs.accountLoginBtn.addEventListener('click', openModal);
// refs.accountLoginBtnMobile.addEventListener('click', openModal); //ушло в мобильное меню

refs.accountLogoutBtn.addEventListener('click', openModal);
// refs.accountLogoutBtnMobile.addEventListener('click', openModal); //ушло в мобильное меню

refs.openModalCreateBtn.addEventListener('click', openModal);
refs.openModalCreateBtnMobile.addEventListener('click', openModal);

// refs.openModalEditCallBtn.addEventListener('click', openModal); //ушло в мобильное меню
// refs.openModalEditCallBtnMobile.addEventListener('click', openModal); //ушло в мобильное меню

refs.openModalFavoritesBtn.addEventListener('click', openModal);
// refs.openModalFaforitesBtnMobile.addEventListener('click', openModal); //ушло в мобильное меню

refs.openModalMyCallsBtn.addEventListener('click', openModal);
// refs.openModalMyCallsBtnMobile.addEventListener('click', openModal); //ушло в мобильное меню

// refs.closeModalBtn.addEventListener('click', toggleModal);

// function toggleModal() {
//   if (refs.modalContent.hasAttribute('data-action')) {
//     refs.modalContent.removeAttribute('data-action');
//   }
//   document.body.classList.toggle('modal-open');
//   refs.modal.classList.toggle('is-hidden');
//   document.body.classList.toggle('no-scroll');
// }

function checkLogin() {
  const checkAuth = localStorage.getItem('key');

  if (checkAuth !== null) {
    refs.openModalCreateBtn.removeAttribute('data-action');
    refs.openModalCreateBtn.setAttribute('data-action', 'create');
    refs.openModalCreateBtnMobile.removeAttribute('data-action');
    refs.openModalCreateBtnMobile.setAttribute('data-action', 'mobile-create');

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
// checkLogin();

//
