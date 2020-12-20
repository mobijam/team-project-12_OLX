import { getDataSearch, getDataCategory } from './call';
import renderCards from '../../templates/item-card.hbs';

export function fun1 () {
    console.log('not found');
}

export async function  fun2 () {
    let url = new URL(location.href).search;
    let data = await getDataSearch(url.split('=')[1]);
    document.querySelector('.js-category').innerHTML = renderCards(data)
  
  
}

export async function  fun3 () {
    const url = new URL(location.href).search;
    const data = await getDataCategory(url.split('=')[1]);
    document.querySelector('.js-category').innerHTML = renderCards(data)
}

export async function  fun4 () {
    const search = new URL(location.href).search;
}

export async function  fun5 () {
    const url = new URL(location.href).search;
    const data = await getDataCategory(url.split('=')[1]);
    document.querySelector('.js-category').innerHTML = renderCards(data)
}