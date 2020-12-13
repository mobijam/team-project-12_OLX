const refs = {
  openModalSearchBtn: document.querySelector('[data-modal-search]'),
  openModalSearchMobileBtn: document.querySelector(
    '[data-modal-search-mobile]',
  ),
  openModalLoginBtn: document.querySelector('[data-modal-login]'),
  openModalLoginMobileBtn: document.querySelector(
    '[data-action="mobile-register"]',
  ),
  openModalCreateBtn: document.querySelector('[data-modal-create]'),
  openModalCreateMobileBtn: document.querySelector(
    '[data-modal-create-mobile]',
  ),
  closeModalBtn: document.querySelector('[data-modal-close]'),

  modal: document.querySelector('[data-modal]'),
  modalContent: document.querySelector('[data-modal-content]'),
};

refs.openModalSearchBtn.addEventListener('click', () => {
  toggleModal();
  refs.modalContent.setAttribute('action', 'search');
  refs.modalContent.children[1].textContent = 'МОДАЛОЧКА ПОИСКА';
});

refs.openModalSearchMobileBtn.addEventListener('click', () => {
  toggleModal();
  refs.modalContent.setAttribute('action', 'search');
  refs.modalContent.children[1].textContent = 'МОДАЛОЧКА ПОИСКА';
});
refs.openModalLoginBtn.addEventListener('click', () => {
  toggleModal();
  refs.modalContent.setAttribute('action', 'login');
  refs.modalContent.children[1].textContent = 'МОДАЛОЧКА АВТОРИЗАЦИИ';
});
refs.openModalLoginMobileBtn.addEventListener('click', () => {
  toggleModal();
  refs.modalContent.setAttribute('action', 'login');
  refs.modalContent.children[1].textContent = 'МОДАЛОЧКА АВТОРИЗАЦИИ';
});

refs.openModalCreateBtn.addEventListener('click', () => {
  toggleModal();
  refs.modalContent.setAttribute('action', 'create');
  refs.modalContent.children[1].textContent = 'МОДАЛОЧКА СОЗДАНИЯ ОБЪЯВЛЕНИЯ';
});
refs.openModalCreateMobileBtn.addEventListener('click', () => {
  toggleModal();
  refs.modalContent.setAttribute('action', 'create');
  refs.modalContent.children[1].textContent = 'МОДАЛОЧКА СОЗДАНИЯ ОБЪЯВЛЕНИЯ';
});
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  if (refs.modalContent.hasAttribute('action')) {
    refs.modalContent.removeAttribute('action');
  }

  document.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
// console.dir(refs.modalContent.children[1].textContent);
