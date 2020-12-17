import { refs } from './modal';
import showModal from './modal';

const menuMobileBtnRef = document.querySelector('[data-menu-mobile-button]');
const menuTabletBtnRef = document.querySelector('[data-menu-tablet-button]');
const menuCloseBtnRef = document.querySelector('[data-menu-inner-button]');
const mobileMenuRef = document.querySelector('[data-menu-mobile]');
const mobileBackdrop = document.querySelector('[data-backdrop-mobile]');

menuMobileBtnRef.addEventListener('click', insideMobileMenulistener);
menuMobileBtnRef.addEventListener('click', addMobileMenuListeners);
menuTabletBtnRef.addEventListener('click', insideMobileMenulistener);
menuTabletBtnRef.addEventListener('click', addMobileMenuListeners);
menuCloseBtnRef.addEventListener('click', onMobileMenuClose);

menuCloseBtnRef.addEventListener('click', toggleMobileMenu);

export default function toggleMobileMenu() {
  const expanded = menuMobileBtnRef.getAttribute('aria-expanded') === 'true' || false;
  menuMobileBtnRef.classList.toggle('is-open');
  menuMobileBtnRef.setAttribute('aria-expanded', !expanded);

  menuTabletBtnRef.getAttribute('aria-expanded') === 'true' || false;
  menuTabletBtnRef.classList.toggle('is-open');
  menuTabletBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
  mobileBackdrop.classList.toggle('is-hidden');
}

function addMobileMenuListeners() {
  if (localStorage.getItem('key') == null) {
    console.log(!localStorage.getItem('key'));
    refs.accountLoginBtnMobile.addEventListener('click', insideMobileMenulistener);
  }

  if (localStorage.getItem('key')) {
    refs.accountLogoutBtnMobile.addEventListener('click', insideMobileMenulistener);
    refs.openModalFaforitesBtnMobile.addEventListener('click', insideMobileMenulistener);
    refs.openModalMyCallsBtnMobile.addEventListener('click', insideMobileMenulistener);
  }
}

function onMobileMenuClose() {
  menuMobileBtnRef.removeEventListener('click', addMobileMenuListeners);
  console.log('listener off');
}

function insideMobileMenulistener(e) {
  toggleMobileMenu();
  const type = e.currentTarget.dataset.action;
  if (type === 'mobile-login') {
    toggleMobileMenu;
    showModal(type);
    menuMobileBtnRef.removeEventListener('click', addMobileMenuListeners);
  }
  if (type === 'mobile-logout') {
    toggleMobileMenu;
    showModal(type);
    menuMobileBtnRef.removeEventListener('click', addMobileMenuListeners);
  }
  if (type === 'mobile-my-calls') {
    toggleMobileMenu;
    showModal(type);
    menuMobileBtnRef.removeEventListener('click', addMobileMenuListeners);
  }
  if (type === 'mobile-favorites') {
    toggleMobileMenu;
    showModal(type);
    menuMobileBtnRef.removeEventListener('click', addMobileMenuListeners);
  }
}
