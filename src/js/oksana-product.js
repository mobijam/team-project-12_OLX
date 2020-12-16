import userInfoTpl from '../templates/seller-info.hbs';

userInfo.addEventListener('click', onUserBtnClick);

fetch('https://callboard-backend.herokuapp.com/user')
  .then(responce => {
    return responce.json();
  })
  .then(product => {
    console.log(product);
  })
  .catch(error => {
    console.log(error);
  });

const userInfo = document.querySelector('.js-user-button');
function onUserBtnClick(evt) {
  evt.preventDefault();

  return (userInfo.innerHTML = userInfoTpl(product));
}
