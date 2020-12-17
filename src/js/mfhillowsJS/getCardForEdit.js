import refs from './refsForEditCard';

// Эта переменная, cardForEdit, должна принимать
// в себя значения той карты,
// на которой находится кнопка "редагувати"

const cardForEdit = {
  // title: `${title}`,
  // description: `${description}`,
  // category: `${category}`,
  // price: `${price}`,
  // phone: `${phone}`,
  // imageUrls: [`${imageUrls}`],
  // isOnSale: false,
  // userId: `${userId}`,
  // id: "1",
};
export default cardForEdit;

refs.openModalBtn.addEventListener('click', getCardforEdit);

// Function get api-card and fill markup

function getCardforEdit(e) {
  e.preventDefault();
  console.log('Listener for Edit-Icon working');

  apiGetCard(cardForEdit)
    .then(cardForEditfromBack => {
      fillMarckup(cardForEditfromBack), getId(cardForEditfromBack);
    })
    .catch(console.log('error GetCard'));
}

// Function get card for edit from Api

function apiGetCard(cardForEdit) {
  const headers = {
    Authorization: '',
  };
  const BASE_URL = 'https://callboard-backend.herokuapp.com';
  return fetch(`${BASE_URL}/call/${cardForEdit.id}`, { headers }).then(res =>
    res.json(),
  );
}

// Function fill markup

function fillMarckup(cardForEditfromBack) {
  refs.titleInput.value = `${cardForEditfromBack.title}`;
  refs.imageInput.value = `${imageUrls}`;
  refs.descriptionInput.value = `${cardForEditfromBack.description}`;
  refs.categoryInput.value = `${cardForEditfromBack.category}`;
  refs.priceInput.value = `${cardForEditfromBack.price}`;
  refs.phoneInput.value = `${cardForEditfromBack.phone}`;
}


