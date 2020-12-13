// connect imports from pertials to be used

import card from '../templates/item-card.hbs';
import API from './fetch-query';
import { pushError, removeError } from './pnotify';


//  page elements to be operate

const cardContainer = document.querySelector('.container');
const userInput = document.getElementById('search');

// search information by user query

const searchQuery = new API;

function onSearch(event) {
    event.preventDefault();
    clearResult();
    searchQuery.query = event.currentTarget.elements.query.value;
    if (searchQuery.query.length === 0) {
        clearResult();
    } else {
        searchQuery.resetPage();
        loadCardsFromAPI().catch(error => pushError('За Вашим запитом товарів не знайдено...'));        
    }
}

function clearResult() { 
    cardContainer.innerHTML = '';
}

function loadCardsFromAPI() { 
    return searchQuery.fetchData()
        .then(renderFoundCards);
}


//render found information

function renderFoundCards(query) {
    const markup = card(query);
    cardContainer.insertAdjacentHTML('beforeend', markup);
}

// process the errors


// add event listeners and functions' calls

userInput.addEventListener('submit', onSearch);