import fetchCountry from './fetchCountries';
import manyCountries from '../templates/list-of-countries.hbs';
import oneCountry from '../templates/one-country.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  inputField: document.querySelector('input[name="countryname"]'),
  listOfCountries: document.querySelector('.js-countries'),
  chosenCountry: document.querySelector('.js-chosen-country'),
};

const renderingOfCountries = () => {
  refs.listOfCountries.innerHTML = '';
  refs.chosenCountry.innerHTML = '';
  if (refs.inputField.value !== '') {
    fetchCountry(refs.inputField.value).then(data => {
      if (data === 404) {
        error({
          title: 'Not found',
          text: '404!',
        });
        return;
      }

      if (data.length === 1) {
        const markup = oneCountry(data);
        refs.chosenCountry.insertAdjacentHTML('beforeend', markup);
      } else if (data.length > 1 && data.length < 11) {
        const markup = manyCountries(data);
        refs.listOfCountries.insertAdjacentHTML('beforeend', markup);
      } else {
        // const PNotify = require('@pnotify/core');
        // PNotify.error({
        //   title: 'Oh No!',
        //   text: 'Something terrible happened.',
        // });
        error({
          // title: 'Oh No!',
          text: 'Too many matces found. Please enter a more specific query!',
        });
      }
    });
  } else {
    return;
  }
};
export default renderingOfCountries;
