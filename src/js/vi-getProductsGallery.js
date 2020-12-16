
// ------------------BEGIN----------------
import markUpList from '../templates/vi-category-list.hbs'
import GetProductGallery from './vi-apiService';
const getProductGallery = new GetProductGallery();
const refs = getRefs();

refs.changePage.forEach(element => {
    element.addEventListener('click', getNewFething);
});
    
getProductList();


function getNewFething(e) {
    clearContainer()
    getProductGallery.pageNumber = getPageNumber(e);
    console.log( 'current Page-->',  getProductGallery.pageNumber);
    getProductList()

}
 
function getPageNumber(event) {
    console.log( 'pyfxtybt ryjgr lhblskjbdfm', event.target.outerText);
   return event.target.outerText;

}

function getProductList() {
    return getProductGallery.fetchProduct()
        .then(response => {
            // console.log('response - > ', response);
        return response
        })
        .then(parceCategoryList)
}

function parceCategoryList(arg) {
    const listOfProduct = markUpList(arg);
    refs.mainContainer.insertAdjacentHTML("afterbegin", listOfProduct);
}

function getRefs() {
    return {
        mainContainer: document.querySelector('.category-list-container'),
        categoryList: document.createElement('ul'),
        changePage: document.querySelectorAll('.js-page-number'),
    }
}
function clearContainer() {
     refs.mainContainer.innerHTML=''
 }