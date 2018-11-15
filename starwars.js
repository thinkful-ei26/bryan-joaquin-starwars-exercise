'use strict';
const searchTerm = process.argv[2];
const API = 'https://swapi.co/api/';


const searchTerm = process.argv[2];

const starship = $.getJSON(`${API}/starships/?search=${searchTerm}`);
const people =  $.getJSON(`${API}/people/?search=${searchTerm}`);
const planets =  $.getJSON(`${API}/planets/?search=${searchTerm}`);


