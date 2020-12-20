const refs = {
  titleInput: document.querySelector('.title-edit-form'),
  imageInput: document.querySelector('.image-edit-form'),
  descriptionInput: document.querySelector('.description-edit-form'),
  categoryInput: document.querySelector('.category-edit-form'),
  priceInput: document.querySelector('.price-edit-form'),
  phoneInput: document.querySelector('.phone-edit-form'),
  openModalBtn: document.querySelector('[data-action="open-edit-modal"]'),
  saveBtn: document.querySelector('[data-action="submit-edit-modal"]'),
  deleteButton: document.querySelector('[data-action="submit-delete-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-edit-modal"]'),
  addModalBtn: document.querySelector('[data-action="submit-edit-modal"]'),
  cancelModalBtn: document.querySelector('[data-action="cancel-edit-modal"]'),
  backdrop: document.querySelector('.js-edit-backdrop'),
  form: document.querySelector('.edit-modal-form'),
};
export default refs;
