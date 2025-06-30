'use strict';

const closePopups = () => {
  const popups = document.querySelectorAll('[data-popup-name]');
  popups.forEach(el => {
    el.classList.remove('is-open');
  });
};

const popupToggle = () => {
  const popups = document.querySelectorAll('[data-popup-name]');
  popups.forEach(el => {
    const popup = el;
    const value = el.dataset.popupName;

    document
      .querySelectorAll(`[data-popup-button-toggle="${value}"]`)
      .forEach(el => {
        el.addEventListener('click', ev => {
          ev.preventDefault();
          closePopups();
          popup.classList.toggle('is-open');
        });
      });

    document
      .querySelectorAll(`[data-popup-button-close="${value}"]`)
      .forEach(el => {
        el.addEventListener('click', ev => {
          ev.preventDefault();
          closePopups();
          popup.classList.remove('is-open');
        });
      });
  });
};
popupToggle();
