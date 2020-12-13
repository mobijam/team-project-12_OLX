import itemCardTpl from '../templates/item-card.hbs';

const refs = {
    cardContainer: document.querySelector('.js-card-container')
}

fetchFavourites()
    .then(renderFavourites)
    .catch(error => console.log(error));

function fetchFavourites() {
    return fetch('https://callboard-backend.herokuapp.com/call/favourites').then(responce => {
    return responce.json();
    })
      };

function renderFavourites(favourites) {
        const markup = itemCardTpl(favourites);
        console.log(markup);
    refs.cardContainer.innerHTML = itemCardTpl(favourites);
    
    }