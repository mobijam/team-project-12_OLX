import './menu_mobile';
import './modal';

import toggleMobileMenu from './menu_mobile';
import { getProductList } from './vi-getProductsGallery';
import * as filter from './resetFilter';

import mobileFilters from '../templates/mobile_filters.hbs';
import filters from '../templates/filters.hbs';
import FetchApi from './fetchAPI';

const categoriesList = document.querySelector('.category-list-container');
const filtersList = document.querySelector('.js-nav-menu');
const mobileFiltersList = document.querySelector('.mobile-nav-menu');
const siteLogo = document.getElementById('logo');

const filtersAndCategories = new FetchApi();

siteLogo.addEventListener('onClick', onSiteLogoClick); //для работы нужен запрос постраничных категорий + карточки

filtersList.addEventListener('click', onFilterBtnClick); // для работы нужны карточки товаров
// mobileFiltersList.addEventListener('click', onMobileFilterBtnClick); // для работы нужны карточки товаров

function onSiteLogoClick(e) {
  e.preventDefault();
  // getProductList(); //для работы нужен шаблон галереи
}

function onFilterBtnClick(e) {
  if (e.target.dataset.action === 'filter') {
    filter.resetBtn.addEventListener('click', filter.resetFilter);

    const category = (filtersAndCategories.searchQuery = e.target.textContent);
    const listOfFilters = document.querySelectorAll('[data-action="filter"]');
    const status = e.target.hasAttribute('disabled');

    if (status) {
      return;
    } else {
      listOfFilters.forEach(filter => {
        filter.removeAttribute('disabled');
        filter.classList.remove('active');
      });
      e.target.setAttribute('disabled', 'disabled');
      e.target.classList.add('active');
      loadSingleCategory(filtersAndCategories.searchQuery);
      const curLoc = `${filtersAndCategories.endPoint.specCat}${filtersAndCategories.searchQuery}`;
    }
    // setLocation(category, curLoc);
  }
}
function setLocation(category, curLoc) {
  try {
    history.pushState(category, null, curLoc);
    return;
  } catch (e) {}
  location.hash = '#' + curLoc;
}

function onMobileFilterBtnClick(e) {
  if (e.target.dataset.action === 'mobile-filter') {
    filtersAndCategories.searchQuery = e.target.textContent;
    loadSingleCategory(filtersAndCategories.searchQuery);
  }
  toggleMobileMenu();
}

export async function createFilters() {
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
  console.log('Loading....');
  // categoriesList.insertAdjacentHTML('beforeend', cards(items)); нужны шаблоны карточек для отображения
}

function clearCategories() {
  categoriesList.innerHTML = '';
}

createFilters();
