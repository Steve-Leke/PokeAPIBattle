$(document).ready(function(){

//click the button YES
//triggers function to get pokemon from API YES
//display on page {picture, name, and relevant data you want}

let leftPokemon;
let rightPokemon;

//starter function to pull a random pokemon from the PokeAPI
function getRandomPokemonLeft() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      leftPokemon = pokeData;

      let leftPokemonDisplay = `
      <h2>${leftPokemon['name']}</h2>
      <img src="${leftPokemon['sprites']['front_default']}">
      `

      $("#left").empty();
      $("#left").append(leftPokemonDisplay);
    });
}

$("#leftButton").click(getRandomPokemonLeft)

//starter function to pull a random pokemon from the PokeAPI
function getRandomPokemonRight() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      rightPokemon = pokeData;

      let rightPokemonDisplay = `
      <h2>${rightPokemon['name']}</h2>
      <img src="${rightPokemon['sprites']['front_default']}">
      `

      $("#right").empty();
      $("#right").append(rightPokemonDisplay);
    });
}

$("#rightButton").click(getRandomPokemonRight)




})
