#!/usr/bin/env node

const inquirer = require("inquirer");

const printFiveMoves = async (pokeName) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const pokemon = await res.json();
  const pokeMoves = pokemon.moves.map(({ move }) => move.name);
  console.log(pokeMoves.slice(0, 5));
};

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view its first 5 moves.",
  },
]).then((answer) => {
  const pokemon = answer.pokemon;
  printFiveMoves(pokemon);
});
