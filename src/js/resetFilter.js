import { getProductList } from './vi-getProductsGallery';
export const resetBtn = document.querySelector('[data-action="reset"]');

export function resetFilter() {
  const listOfFilters = document.querySelectorAll('[data-action="filter"]');
  function resetFilter(items) {
    items.forEach(item => {
      if (item.hasAttribute('disabled') && item.classList.contains('active')) {
        item.classList.remove('active');
        item.removeAttribute('disabled');
        // getProductList(); //для включения нужен шаблон галереи
      }
    });
  }
  resetFilter(listOfFilters);
}
function setLocation(curLoc) {
  try {
    history.pushState(null, null, curLoc);
    return;
  } catch (e) {}
  location.hash = '#' + curLoc;
}
