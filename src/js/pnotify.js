import { error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
defaults.styling = 'material';
defaults.icons = 'material';
defaults.hide = false;
defaults.remove = false;
delete defaults.stack;

function pushError(err) {
  error({
    text: `${err}`,
    type: 'error',
    addClass: 'error',
  });
  setTimeout(() => {
    removeError();
  }, 5000);
}

function removeError() {
  const errorRef = document.querySelector('.error');
  if (errorRef) errorRef.remove();
}

export { pushError, removeError };