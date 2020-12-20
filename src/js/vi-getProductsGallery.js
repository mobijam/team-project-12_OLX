/* 
. приходит response.json в виде объекта из 5 массивов объектов
. каждый объект массива содержит :
, - category
, - description
, - imageUrls
, - isOnSale
, - phone
, - price
, - title
, - userId
, - __v
, - _id 
*/


// ------------------BEGIN----------------
import markUpList from '../templates/vi-category-list.hbs';
import GetProductGallery from './vi-apiService';
const getProductGallery = new GetProductGallery();
const refs = getRefs();
const getPageNumber = (event) => event.target.outerText;

//| ---------------------tests-------------------
// | --------------------------------------------

if (window.innerWidth <= 768) { refs.mobileButton.addEventListener('click', getNewFething) };

refs.changePage.forEach(element => element.addEventListener('click', getNewFething));

getCategorytList()


function getNewFething(e) {
    clearContainer()
    getProductGallery.pageNumber = getPageNumber(e);
    // getProductGallery.rusRequest = '/russian-categories';
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

function addToFavorite(e) {
    console.log('Вы перешли на страницу ИЗБРАННЫЕ');
}


function parceCategoryList(arg) {
    const listOfProduct = markUpList(arg);
    refs.categoryList.insertAdjacentHTML("afterbegin", listOfProduct);
    const categoryPageLink = document.querySelectorAll('.category-navi .text');
    const favoriteButtons = document.querySelectorAll('[data-action="favorite"]') 
    categoryPageLink.forEach(el => el.addEventListener('click', getCategoryPage));
    favoriteButtons.forEach(e=>e.addEventListener('click', addToFavorite))

}


function getRefs() {
    return {
        // mainContainer: document.querySelector('.category-list-container'),
        // mainContainer: document.querySelector('.js-categories'),
        categoryList: document.querySelector('.category-list'),
        changePage: document.querySelectorAll('.js-page-number'),
        mobileButton: document.querySelector('[data-action="data-modal-create-mobile"]'),
        // categoryPageLink: document.querySelector('.category-navi .text'),
    }
}

function clearContainer() {refs.categoryList.innerHTML = ''};

export function fetchOnError(arg = 'ERROR') { console.log(arg) };
