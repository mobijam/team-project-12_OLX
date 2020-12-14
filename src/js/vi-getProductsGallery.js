
// ----------BEGIN---------------------------------------

import markUpList from '../templates/vi-category-list.hbs'
console.log('шаблон категорий-->>', markUpList());
import GetProductGallery from './vi-apiService';

const getProductGallery = new GetProductGallery()


getProductList()
const refs = getRefs();


function getProductList() {
    return getProductGallery.fetchProduct()
        .then(response => {
            console.log('response - > ', response);
            console.log(response);
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
        mainContainer: document.querySelector('main'),
        categoryList: document.createElement('ul'),
    }
}

