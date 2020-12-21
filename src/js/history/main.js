import { fun1 } from './update-page' 
import { routers } from './router';

let auth = true;
let startState = true;

let navbarNav = document.querySelector('.container');


function updatePage (e) {
    if (e.target.tagName !== "A") return
    e.preventDefault();
    refreshHistoryOnClick(e);
    updatedContent();
}

function refreshHistoryOnClick(e) {
    const query = e.target.getAttribute('href');
    updateHistory(query) 
}

const updateHistory = (query) => {
    let router = routers.find( item => item.path === query);
    console.log(router);
    if (!router) return
    if (!router.meta.auth || !auth) updateState(query)
}

window.onpopstate = function(event) {
    updatedContent();
};
let state = null;
export const updatedContent = () => {
    let router = routers.find( item => item.path === history.state || item.path === location.pathname)
    if (!router) {
        fun1();
        return
    }
    if (!router.meta.auth || !auth) {
        router.component(); 
    }
    else if (router.meta.auth && auth && startState) {
        routers[0].component();
        updateState(routers[0].path)
    } 
    startState = false;
}

export const updateState = (payload) => {
    history.pushState(payload, null, payload) 
} 

navbarNav.addEventListener('click', updatePage);
window.addEventListener('load', updatedContent());