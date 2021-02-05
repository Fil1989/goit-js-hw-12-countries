import renderingOfCountries from './render-countries';
const refs = {
  inputField: document.querySelector('input[name="countryname"]'),
};
var debounce = require('lodash.debounce');

refs.inputField.addEventListener('input', debounce(renderingOfCountries, 500));
