const filterBtn = document.querySelector('[data-action="filter"]');
const resetFilterBtn = document.querySelector('[data-action="reset"]');
console.log(filterBtn);

resetFilterBtn.addEventListener('click', onResetBtnClick);

function onResetBtnClick() {
  if (filterBtn) {
    filterBtn.classList.remove('.active');
    console.log('removed filter');
  }
}
filterBtn.addEventListener('click', onFilterBtnClick);

function onFilterBtnClick(e) {
  console.log(e.target);
}

const filters = document.querySelector('.filter');
console.log(filters);

function getrefs() {
  return {
    filterBtn: document.querySelectorAll('[data-action="filter"]'),
    resetFilterBtn: document.querySelector('[data-action="reset"]'),
  };
}
