import userInfoTpl from '../templates/user-info.hbs';
import productCardTpl from '../templates/product-card.hbs';
const BASE_URL = 'https://callboard-backend.herokuapp.com';
const refs = {
  userContainer: document.querySelector('.js-user-container'),
  userBtn: document.querySelector('.js-user-button'),
  cardContainer: document.querySelector('.js-product-card'),
  cardBtn: document.querySelector('.'),
};

userBtn.addEventListener('click', onUserBtnClick);

function onUserBtnClick(e) {
  e.preventDefault();

  userInfo().then;

  return (userInfo.innerHTML = userInfoTpl(product));
}

function userInfo(userId) {
  return fetch(`${BASE_URL}/user/{userId}`).then(responce => Response.json());
}

function renderUserInfo(userId) {
  refs.userContainer.innerHTML = userInfoTpl(userId);
}

export default { userInfo };

cardBtn.addEventListener('click', onCardBtnClick);
function onCardBtnClick(e) {
  e.preventDefault();
}

function cardInfo(callId) {
  return fetch(`${BASE_URL}/call{callId}`).then(responce => Response.json());
}

function renderProductCard(cardInfo) {
  refs.cardContainer.innerHTML = productCardTpl(callId);
}
