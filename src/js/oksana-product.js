import userInfoTpl from '../templates/user-info.hbs';
const BASE_URL = 'https://callboard-backend.herokuapp.com';
const refs = {
  userContainer: document.querySelector('.js-user-container'),
  userBtn: document.querySelector('.js-user-button'),
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
