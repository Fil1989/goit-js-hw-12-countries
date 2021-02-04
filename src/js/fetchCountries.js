import renderingOfCountries from './render-countries';

const refs = {
  inputField: document.querySelector('input[name="countryname"]'),
  listOfCountries: document.querySelector('.js-countries'),
  chosenCountry: document.querySelector('.js-chosen-country'),
};

export default function fetchCountry(searchQuery) {
  let url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  refs.listOfCountries.innerHTML = '';
  refs.chosenCountry.innerHTML = '';
  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}
