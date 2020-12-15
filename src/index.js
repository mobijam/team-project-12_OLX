// styles
import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
// modules
import './js/storage';
import './js/pnotify';
import './js/search-query';
import './js/menu_mobile';
import './js/modal';
import './js/authorization';
// import './js/oksana-favourites';
// import './js/oksana-product';

// templates
// import categories from './templates/categories.hbs';
import mobileFilters from './templates/mobile_filters.hbs';
import filters from './templates/filters.hbs';
import FetchApi from './js/fetchAPI';

// DOM-elements selection
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

// async function createCategories() {
//   try {
//     const categories = await filtersAndCategories.fetchCategories();
//     const list = await categories.json();
//     const result = Object.keys(list);
//     const buildMarkup = items => {
//       categoriesMarkup(items);
//     };
//     clearCategories();
//     return buildMarkup(result);
//   } catch (error) {
//     throw error;
//   }
// }

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

// createCategories();

const page = document.querySelector('.js-page-number');
// page.addEventListener('click', createCategories);

function clearCategories() {
  categoriesList.innerHTML = '';
}
