export default function fetchCountry(searchQuery) {
  let url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => {
      if (res.status === 404) {
        return res.status;
      }
      return res.json();
    })
    .catch(error => console.log(error));
}
