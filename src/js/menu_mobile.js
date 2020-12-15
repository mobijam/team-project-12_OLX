const menuMobileBtnRef = document.querySelector('[data-menu-mobile-button]');
const menuTabletBtnRef = document.querySelector('[data-menu-tablet-button]');
const menuCloseBtnRef = document.querySelector('[data-menu-inner-button]');
const mobileMenuRef = document.querySelector('[data-menu-mobile]');
const mobileBackdrop = document.querySelector('[data-backdrop-mobile]');

menuMobileBtnRef.addEventListener('click', openMobileMenu);
menuTabletBtnRef.addEventListener('click', openMobileMenu);

menuCloseBtnRef.addEventListener('click', openMobileMenu);

function openMobileMenu() {
  const expanded = menuMobileBtnRef.getAttribute('aria-expanded') === 'true' || false;
  menuMobileBtnRef.classList.toggle('is-open');
  menuMobileBtnRef.setAttribute('aria-expanded', !expanded);

  menuTabletBtnRef.getAttribute('aria-expanded') === 'true' || false;
  menuTabletBtnRef.classList.toggle('is-open');
  menuTabletBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
  mobileBackdrop.classList.toggle('is-hidden');
  // document.body.classList.toggle('no-scroll');
}
