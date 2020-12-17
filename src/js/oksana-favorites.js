// import FiltersApiService from './fetchAPI';

import itemCardTpl from '../templates/favorite-item-card.hbs';

const BASE_URL = 'https://callboard-backend.herokuapp.com';
const refs = {
  cardFavContainer: document.querySelector('.js-favorites-container'),
  favBtn: document.querySelector('[data-action="favorites"]'),
};

refs.favBtn.addEventListener('click', onFavBtnClick);

function onFavBtnClick(e) {
  e.preventDefault();
  fetchFavorites().then(renderFavorites).catch(onFetchError);
}

function fetchFavorites() {
  return fetch(`${BASE_URL}/call/favourites`).then(responce => {
    return responce.json();
  });
}

function renderFavorites(favorites) {
  refs.cardFavContainer.innerHTML = itemCardTpl(favorites);
}

function onFetchError(error) {
  console.log(error);
}

// const el = document.getElementById('heart');
// el.addEventListener('click', onFavIconClick);

// function onFavIconClick(e) {
//   e.preventDefault();
//   deleteFavorites();
// }

// function deleteFavorites(callId) {
//   const url = `${BASE_URL}/call/favourites${callId}`;
//   const options = {
//     method: 'DELETE',
//   };
//   return fetch(url, options).then(res => res.json());
// }
