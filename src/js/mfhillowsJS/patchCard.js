import cardForEdit from './getCardForEdit';
import refs from "./refsForEditCard";


// Wright new value in card
const editId = cardForEdit.id;

const updateCard = {
  title: refs.titleInput.value,
  imageUrls: refs.imageInput.value,
  description: refs.descriptionInput.value,
  category: refs.categoryInput.value,
  price: refs.priceInput.value,
  phone: refs.phoneInput.value,
  id: editId,
};

refs.saveBtn.addEventListener('click', patchCard);



function patchCard(e) {
  e.preventDefault();

  console.log('Listener for Save button working');
  apiPatchCard(updateCard, editId);
  setTimeout(clearMarckup, 3000);
}

// Function patch upDateCard to Backend

function apiPatchCard(updateCard, editId) {
  const BASE_URL = 'https://callboard-backend.herokuapp.com';
  const headers = {
    Authorization: '',
  };

  const options = {
    method: 'PATCH',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(updateCard),
  };

  return fetch(`${BASE_URL}/call/${editId}`, options).then(responce =>
    responce.json(),
  );
}

// Function clear markup

function clearMarckup() {
  refs.titleInput.value = '';
  refs.imageInput.value = '';
  refs.descriptionInput.value = '';
  refs.categoryInput.value = '';
  refs.priceInput.value = '';
  refs.phoneInput.value = '';
}
