const COUNTRIES_BASE = `https://restcountries.com/v3.1/name/`;
const filters = "name,capital,population,flags,languages"


export function fetchCountries (name) {
    return fetch(`${COUNTRIES_BASE}/${name}?fields=/${filters}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
          return response.json();
        });
};