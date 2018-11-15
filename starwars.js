'use strict';
const searchTerm = process.argv[2];
const API = 'https://swapi.co/api/';


// const searchTerm = process.argv[2];

// const starship = $.getJSON(`${API}/starships/?search=${searchTerm}`);
const people =  $.getJSON(`${API}/people/?search=${searchTerm}`);
// const planets =  $.getJSON(`${API}/planets/?search=${searchTerm}`);
const films =  $.getJSON(`${API}/films/?search=${searchTerm}`)

let capitalName = people.results.name.toUppercase();
let vehicleCount = people.results.vehicles.length;
let starshipCount = people.results.starships.length;

if (people.results.gender === 'male') {
  genderPronoun = 'He';
} else if (people.results.gender === 'female') {
  genderPronoun = 'She';
} else if (people.results.gender === 'n/a') {
  genderPronoun = 'It'; 
} else {
  errorcode here;
}

if (people.count === 0) {
  console.log(`[${capitalName}] is not an entity we're looking for. Move along.`);
}

[capitalName] has been found!
[He] has starred in the following films:

1. Star Wars: The Phantom Menace
2. Star Wars: Attack of the Clones
[INSTRUCTION: list should be sorted in order of release]

[He] has also been associated with a total of [vehicleCount] vehicles and [starshipCount] starships.

[DARTH FOOBAR] is not an entity we're looking for. Move along.