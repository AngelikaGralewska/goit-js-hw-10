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
        if (box.value === ''){
            list.innerHTML = '';
            info.innerHTML = '';
            return;
        }
        const countryName = box.value.trim();
fetchCountries(countryName)
        .then(countriesListOk)
        .catch(countriesListFailure)
};

function countriesListFailure(){
    if(countries.length === 0){
   Notiflix.Notify.failure('Oops, there is no country with that name');
    }
};

function countriesListOk(countries) {
        if (countries.length > 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            list.innerHTML = '';
            info.innerHTML = '';
        }
        else if (countries.length > 1 && countries.length <= 10) {
            const countriesList = countries.map(country => countryItem(country)).join('');
            list.innerHTML = countriesList;
            info.innerHTML = '';
        } 
        else if (countries.length === 1) {
            const countriesCards = countries.map(country => countryСard(country)).join('');
            list.innerHTML = '';
            info.innerHTML = countriesCards;
      }};

      function countryItem({ flags, name }) {
        return `
        <li>
        <div class="country-list_item">
          <img " src="${flags.svg}" alt="${name.official}" width="20" height="10" />
          <h5 >${name.official}</h5>
          <div>
        </li>`;
      };
      
      function countryСard({ flags, name, capital, population, languages }) {
        return `
            <div>
              <img src="${flags.svg}" alt="${name.official}" width="60" height="30"/>
              <h3 >${name.official}</h3>
            </div>
            <ul>
                <li><b>Capital:</b> ${capital}</li>
                <li><b>Population:</b> ${population}</li>
                <li><b>Languages:</b> ${Object.values(languages)}</li>
            </ul>`;
      };



 