
// ------------------BEGIN----------------
import markUpList from '../templates/vi-category-list.hbs';
import GetProductGallery from './vi-apiService';
const getProductGallery = new GetProductGallery();
const refs = getRefs();
const getPageNumber = (event) => event.target.outerText;


if (window.innerWidth <= 768) { refs.mobileButton.addEventListener('click', getNewFething) };

refs.changePage.forEach(element => element.addEventListener('click', getNewFething));

getCategorytList()

function getNewFething(e) {
    clearContainer()
    getProductGallery.pageNumber = getPageNumber(e);
    getCategorytList();

}
 
function getCategorytList() {
    return getProductGallery.fetchCategoryList()
        .then(response => {
            return response
        })
        .then(parceCategoryList);
}

function getCategoryPage(e) {
    getProductGallery.newRequest = 'property';
    console.log('Вы перешли на страницу КАТЕГОРИИ');
    getProductGallery.fetchCategoryContent();
}

function getCardInfo(e) {
    console.log('Вы перешли на страницу КАРОТЧКА ТОВАРА');
    // refs.fullCardInfo.forEach(el => el.removeEventListener('click', getCardInfo));    // не стоит этого делать))))
}

function addToFavorite(e) {
    console.log('Вы перешли на страницу ИЗБРАННЫЕ');
    // refs.favoriteButtons.forEach(e => e.removeEventListener('click', addToFavorite));    // не стоит этого делать))))
}

function parceCategoryList(arg) {
    const listOfProduct = markUpList(arg);
    refs.categoryList.insertAdjacentHTML("afterbegin", listOfProduct);

    refs.categoryPageLink = document.querySelectorAll('.cg-category-link');

    refs.favoriteButtons = document.querySelectorAll('[data-action="favorite"]');
    refs.fullCardInfo = document.querySelectorAll('[data-action="full"]');
    refs.categoryPageLink.forEach(el => el.addEventListener('click', getCategoryPage, { once: true }));
    refs.favoriteButtons.forEach(e => e.addEventListener('click', addToFavorite, { once: true }));
    refs.fullCardInfo.forEach(el => el.addEventListener('click', getCardInfo, { once: true }));
}

function getRefs() {
    return {
        categoryList: document.querySelector('.cg-list'),
        changePage: document.querySelectorAll('.js-page-number'),
        mobileButton: document.querySelector('[data-action="data-modal-create-mobile"]'),
    }
}

function clearContainer() {refs.categoryList.innerHTML = ''};

export function fetchOnError(arg = 'ERROR') { console.log(arg) };
