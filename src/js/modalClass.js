
import authorizationModal from '../templates/auth-form.hbs';

const hbsFunctions = [
    authorizationModal,
];

class Modal {
  constructor(functions) {
    this.functions = functions;
    this.openModal = this.openModal.bind(this);
    this.onEscapeCloseModal = this.onEscapeCloseModal.bind(this);
    this.onClickCloseModal = this.onClickCloseModal.bind(this);
  }
  startListener() {
    document.body.addEventListener('click', this.openModal, { once: true });
  }
  openModal(event) {
    if (event.target.dataset.modal == 'true') {
      event.preventDefault();
      const index = event.target.dataset.hbs;
      document
        .querySelector('body')
        .insertAdjacentHTML('beforeend', this.functions[index]());
      const modalRef = document.querySelector('div[data-close]');
      document.body.style.overflow = 'hidden';
      modalRef.addEventListener('click', this.onClickCloseModal);
      window.addEventListener('keydown', this.onEscapeCloseModal);
    }
    this.startListener();
  }
  closeModal() {
    const backdrop = document.querySelector('div[data-close]');
    window.removeEventListener('keydown', this.onEscapeCloseModal);
    backdrop.removeEventListener('click', this.onClickCloseModal);
    backdrop.remove();
    document.body.style.overflowY = 'scroll';
  }
  onEscapeCloseModal(event) {
    if (event.code === 'Escape') {
      this.closeModal();
    }
  }
  onClickCloseModal(event) {
    if (event.target.hasAttribute('data-close')) {
      event.preventDefault();
      this.closeModal();
    }
  }
}
const myModal = new Modal(hbsFunctions);

export default myModal;
