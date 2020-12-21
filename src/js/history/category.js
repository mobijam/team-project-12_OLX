import { updateState, updatedContent } from './main'

const listCategories = document.querySelector('.js-nav-menu');

const searchCategories = (e) => {
    const elem = e.target;
    if (!elem.classList.contains("js-nav-menu-item")) return
    e.preventDefault();
    let value = elem.getAttribute('filter');
    updateState(`/category?value=${value}`);
    updatedContent()
}

listCategories.addEventListener('click', searchCategories)