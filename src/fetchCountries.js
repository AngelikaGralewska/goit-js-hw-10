

function fetchCountries (name) {
    const COUNTRIES_BASE =`https://restcountries.com/v3.1/name/`;
    const filters = "name,capital,population,flags,languages"

    return fetch(`${COUNTRIES_BASE}/${name}?fields=${filters}`)
    .then(response => response.json());
  }

export { fetchCountries };