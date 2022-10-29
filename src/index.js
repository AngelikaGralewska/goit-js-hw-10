import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const box = document.getElementById('search-box');
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');

box.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(){
    const name = box.value.trim();
    if (name === ''){
        list.innerHTML = '';
        info.innerHTML = '';
        return;
    }};