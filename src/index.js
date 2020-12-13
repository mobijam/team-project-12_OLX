import './sass/main.scss';
import './js/storage';
import './js/pnotify';
import './js/search-query';
// import './js/oksana-favourites';
// import './js/oksana-product';

import './js/menu_mobile';
import './js/modal';

import categories from './templates/categories.hbs';
import mobileFilters from './templates/mobile_filters.hbs';
import filters from './templates/filters.hbs';
import register from './js/register';
import FetchApi from './js/fetchAPI';

const categoriesList = document.querySelector('.js-categories');
const filtersList = document.querySelector('.js-nav-menu');
const mobileFiltersList = document.querySelector('.mobile-js-nav-menu');

const filtersAndCategories = new FetchApi();

async function createFilters() {
  try {
    const filters = await filtersAndCategories.fetchFIlters();
    const buildMarkup = items => {
      filtersMarkup(items);
    };
    return buildMarkup(filters);
  } catch (error) {
    throw error;
  }
}

async function createCategories() {
  try {
    const categories = await filtersAndCategories.fetchCategories();
    const list = await categories.json();
    const result = Object.keys(list);
    const buildMarkup = items => {
      categoriesMarkup(items);
    };
    clearCategories();
    return buildMarkup(result);
  } catch (error) {
    throw error;
  }
}

function filtersMarkup(items) {
  filtersList.insertAdjacentHTML('beforeend', filters(items));
  mobileFiltersList.insertAdjacentHTML('beforeend', mobileFilters(items));
}
function categoriesMarkup(items) {
  categoriesList.insertAdjacentHTML('beforeend', categories(items));
}
createFilters();
createCategories();

const page = document.querySelector('.js-page-number');
page.addEventListener('click', createCategories);

function clearCategories() {
  categoriesList.innerHTML = '';
}

