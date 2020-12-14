// import { load, save, remove } from './storage';
// import { pushError, removeError } from './pnotify';
// import fetchFunctions from './fetchMe';

const authBackdrop = document.querySelector('.authorization-backdrop');
const googleAuthBtn = document.querySelector('.google-auth');
const loginInput = document.querySelector('#authorization-modal-email');
const passwordInput = document.querySelector('#authorization-modal-password');
const loginBtn = document.querySelector('.authorization-modal-login');
const registerBtn = document.querySelector('.authorization-modal-register');

try {
  const openModalBtn = document.querySelector(
    '[data-modal-type="authorization"]',
  );
  openModalBtn.addEventListener('click', validate, { once: true });
} catch (error) {
  console.log('User already logged in!');
}

async function fetchLogin() {
  const info = {
    email: loginInput.value,
    password: passwordInput.value,
  };

  const request = {
    point: fetchFunctions.points.login,
    body: info,
    method: 'POST',
  };

  let response = await fetchFunctions.login(request);

  if (response) {
    authBackdrop.click();
  }
}

async function fetchRegistration() {
  const info = {
    email: loginInput.value,
    password: passwordInput.value,
  };
  const request = {
    point: fetchFunctions.points.reg,
    body: info,
    method: 'POST',
  };
  try {
    let response = await fetchFunctions.getRequest(request);
    if (response.id) {
      await fetchLogin();
    }
  } catch (error) {
    console.log(error);
  }
}

let errors;

function validateLogin(evt) {
  evt.preventDefault();
  if (loginInput.value.length === 0) {
    errors.push('Empty email input!');
    pushError('Empty email input!');
    return;
  }

  fetchLogin();
}

function validatePassword() {
  const p = passwordInput.value;

  if (p.length < 8) {
    errors.push('Your password must be at least 8 characters');
    pushError('Your password must be at least 8 characters');
  }
  if (p.search(/[a-z]/i) < 0) {
    errors.push('Your password must contain at least one letter.');
    pushError('Your password must contain at least one letter.');
  }
  if (p.search(/[0-9]/) < 0) {
    errors.push('Your password must contain at least one digit.');
    pushError('Your password must contain at least one digit.');
  }
}

function validateLoginForRegistration() {
  if (loginInput.value.length === 0) {
    pushError('Enter login');
  } else if (loginInput.value.length <= 5) {
    pushError('Your login must be at least 6 characters');
  }
}

function validateRegistration(evt) {
  evt.preventDefault();
  errors = [];

  validatePassword();
  validateLoginForRegistration();

  if (errors.length < 1) {
    fetchRegistration();
  }
}

async function googleAuthorization(evt) {
  let response = await fetchFunctions.getRequest({
    point: fetchFunctions.points.google,
  });
}
function validate(evt) {
  loginBtn.addEventListener('click', validateLogin);
  registerBtn.addEventListener('click', validateRegistration);
  googleAuthBtn.addEventListener('click', googleAuthorization);
}
