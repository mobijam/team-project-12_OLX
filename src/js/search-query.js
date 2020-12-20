// connect imports from pertials to be used
import card from '../templates/item-card.hbs';
import API from './fetchAPI';
import { pushError} from './pnotify';
import {updateState} from './history/main';
import {updatedContent} from './history/main';

//  page elements to be operate
const cardContainer = document.querySelector('.js-categories');

// search information by user query

const searchQuery = new API;

export function onSearch(event) {
    event.preventDefault();
    clearResult();
    searchQuery.query = event.currentTarget.elements.query.value;
    if (searchQuery.query.length === 0) {
        clearResult();
         pushError('Введіть назву товару...');
         return;
    } else {
        searchQuery.resetPage();
        loadCardsFromAPI();        
    }
}

function clearResult() { 
    cardContainer.innerHTML = '';
}

function loadCardsFromAPI() { 
    return searchQuery.fetchSearch()
        .then(renderFoundCards)
        .catch(error => pushError('За Вашим запитом товарів не знайдено...'));
}


//render found information, add notification and search history

function renderFoundCards(query) {
    cardContainer.innerHTML = card(query);
    updateState(`/search?value=${value}`);
    updatedContent();
}