//const COUNTRIES_BASE =`https://restcountries.com/v3.1/name/`;
//const filters = "name,capital,population,flags,languages"


function fetchCountries (name) {
    const COUNTRIES_BASE =`https://restcountries.com/v3.1/name/`;
    const filters = "name,capital,population,flags,languages"

    return fetch(`${COUNTRIES_BASE}/${name}?fields=/${filters}`)
    .then((response) => {
        const countriesData = response.json();
        return countriesData;
    })
    .then((recivedCountriesData) => {
        const countriesData = recivedCountriesData;
        return recivedCountriesData;
    })
};

export { fetchCountries };