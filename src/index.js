import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const box = document.querySelector("#search-box");
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');

box.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(){
    const name = box.value.trim();
        if (name === ''){
            list.innerHTML = '';
            info.innerHTML = '';
            return;
        }
    fetchCountries(name)
        .then(countriesListOk)
        .catch(countriesListError)
};

function countriesListOk(countries) {
        if (countries.length > 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            list.innerHTML = '';
            info.innerHTML = '';
            return;
        }
        if (countries.length > 1 && countries.length <= 10) {
            const countriesList = countries.map(country => countryItem(country)).join('');
            list.innerHTML = countriesList;
            info.innerHTML = '';
        } 
        if (countries.length === 1) {
            const countriesCards = countries.map(country => countryСard(country)).join('');
            list.innerHTML = '';
            info.innerHTML = countriesCards;
      }};

      function countryItem({ flags, name }) {
        return `
        <li class="country-list_item">
          <img " src="${flags.svg}" alt="${name.official}" width="25" />
          <h3 >${name.official}</h3>
        </li>`;
      }
      
      function countryСard({ flags, name, capital, population, languages }) {
        return `
          <div class="country-info">
            <div class="country-info_box">
              <img src="${flags.svg}" alt="${name.official}" width="50" />
              <h3 >${name.official}</h3>
            </div>
            <ul>
                <li>Capital: ${capital}</li>
                <li>Population: ${population}</li>
                <li>Languages: ${Object.values(languages)}</li>
            </ul>`;
      };

function countriesListError(){
    Notiflix.Notify.failure('Oops, there is no country with that name');
    list.innerHTML = '';
    info.innerHTML = '';
    return;
};


 