import refs from './refsForEditCard';
import cardForEdit from './getCardForEdit';

refs.deleteButton.addEventListener('click', deleteCard);

// Function delete api-card and markup

function deleteCard(e) {
  e.preventDefault();
  console.log('Listener for Delete-Button working');

  clearMarckup();

  apiDeleteCard(cardForEdit)
    .then(responce => {
      console.log(responce);
    })
    .catch(console.log('Error DeleteCard'));
}

// Function delete api-card

function apiDeleteCard(cardForEdit) {
  const BASE_URL = 'https://callboard-backend.herokuapp.com';
  const headers = {
    Authorization: '',
  };

  const options = {
    method: 'DELETE',
    headers,
  };

  return fetch(`${BASE_URL}/call/${cardForEdit.id}`, options).then(res =>
    res.json(),
  );
}

// Function delete markup

function clearMarckup() {
  refs.titleInput.value = '';
  refs.imageInput.value = '';
  refs.descriptionInput.value = '';
  refs.categoryInput.value = '';
  refs.priceInput.value = '';
  refs.phoneInput.value = '';
}
