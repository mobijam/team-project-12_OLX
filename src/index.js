// styles
import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
// modules
import './js/storage';
import './js/pnotify';
import './js/search-query';

import './js/menu_mobile';
import './js/modal';

import './js/mfhillowsJS/js-for-edit-cards';

// import './js/authorization';
import './js/cj-modules';

// import './js/oksana-favourites';
// import './js/oksana-product';
import './js/add-modal';
import toggleMobileMenu from './js/menu_mobile';

// templates
import mobileFilters from './templates/mobile_filters.hbs';
import filters from './templates/filters.hbs';
import FetchApi from './js/fetchAPI';
import './templates/add-modal.hbs';
// DOM-elements selection
const categoriesList = document.querySelector('.js-categories');
const filtersList = document.querySelector('.js-nav-menu');
const mobileFiltersList = document.querySelector('.mobile-nav-menu');

const filtersAndCategories = new FetchApi();

// filtersList.addEventListener('click', onFilterBtnClick);
// mobileFiltersList.addEventListener('click', onMobileFilterBtnClick);

function onFilterBtnClick(e) {
  if (e.target.dataset.action === 'filter') {
    filtersAndCategories.searchQuery = e.target.textContent;
    loadSingleCategory(filtersAndCategories.searchQuery);
    e.target.classList.add('active');
  }
}

function onMobileFilterBtnClick(e) {
  if (e.target.dataset.action === 'mobile-filter') {
    filtersAndCategories.searchQuery = e.target.textContent;
    loadSingleCategory(filtersAndCategories.searchQuery);
  }
  toggleMobileMenu();
}

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

async function loadSingleCategory() {
  try {
    const categories = await filtersAndCategories.fetchSingleCategory();
    const list = await categories.json();
    const buildMarkup = items => {
      singleCategoryMarkup(items);
    };
    clearCategories();
    console.log(list);
    return buildMarkup(list);
  } catch (error) {
    throw error;
  }
}

function filtersMarkup(items) {
  filtersList.insertAdjacentHTML('beforeend', filters(items));
  mobileFiltersList.insertAdjacentHTML('beforeend', mobileFilters(items));
}
function singleCategoryMarkup(items) {
  categoriesList.insertAdjacentHTML('beforeend', cards(items));
}
function categoriesMarkup(items) {
  categoriesList.insertAdjacentHTML('beforeend', categories(items));
}
createFilters();

const page = document.querySelector('.js-page-number');

function clearCategories() {
  categoriesList.innerHTML = '';
}
