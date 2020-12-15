import './sass/main.scss';
import './js/storage';
import './js/pnotify';
import './js/search-query';
// import './js/oksana-favourites';
// import './js/oksana-product';

import './js/menu_mobile';
import './js/modal';
import './js/main.js';
// import './js/clearFilter';
import 'material-design-icons/iconfont/material-icons.css';
import './js/authorization';
// import './js/vi-getProductsGallery';

import categories from './templates/categories.hbs';
import mobileFilters from './templates/mobile_filters.hbs';
import filters from './templates/filters.hbs';
import cards from './templates/item-card.hbs';
import FetchApi from './js/fetchAPI';

const categoriesList = document.querySelector('.js-categories');
const filtersList = document.querySelector('.js-nav-menu');
const mobileFiltersList = document.querySelector('.mobile-nav-menu');

const filtersAndCategories = new FetchApi();

filtersList.addEventListener('click', onFilterBtnClick);

function onFilterBtnClick(e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName === 'BUTTON') {
    filtersAndCategories.searchQuery = e.target.textContent;
    createSingleCategory(filtersAndCategories.searchQuery);
    e.target.classList.add('active');
  }
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

async function createSingleCategory() {
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
function singleCategoryMarkup(items) {
  categoriesList.insertAdjacentHTML('beforeend', cards(items));
}
function categoriesMarkup(items) {
  categoriesList.insertAdjacentHTML('beforeend', categories(items));
}
createFilters();
getrefs();
// console.log(filterBtn);

createCategories();

const page = document.querySelector('.js-page-number');
page.addEventListener('click', createCategories);

function clearCategories() {
  categoriesList.innerHTML = '';
}

//

// resetFilterBtn.addEventListener('click', onResetBtnClick);

// function onResetBtnClick() {
//   if (filterBtn) {
//     filterBtn.classList.remove('.active');
//     console.log('removed filter');
//   }
// }
// filterBtn.addEventListener('click', onFilterBtnClick);

// function onFilterBtnClick(e) {
//   console.log(e.target);
// }

// const filters = document.querySelector('.filter');
// console.log(filters);

function getrefs() {
  return {
    filterBtn: document.querySelectorAll('[data-action="filter"]'),
    resetFilterBtn: document.querySelector('[data-action="reset"]'),
  };
}
