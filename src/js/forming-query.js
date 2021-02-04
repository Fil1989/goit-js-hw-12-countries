import renderingOfCountries from './render-countries';

var debounce = require('lodash.debounce');

const refs = {
  inputField: document.querySelector('input[name="countryname"]'),
  listOfCountries: document.querySelector('.js-countries'),
};
refs.inputField.addEventListener('input', debounce(renderingOfCountries, 500));
