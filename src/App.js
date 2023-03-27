/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Details } from 'Details';

// creates a state variable called pokemons and a function called setPokemons
// to change its value. The initial value of pokemons is an empty array. */
export const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  console.log(pokemons);
  console.log(setPokemons);

  // fetchingPokemons is a function that sends an HTTP GET request to the
  // PokeAPI to fetch a list of Pokemon.
  // It then converts the response to JSON using .json()
  // and sets the list of Pokemon to the pokemons state variable using setPokemons .
  const fetchingPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((respnse) => respnse.json())
      .then((data) => setPokemons(data.results));
  };

  // useEffect is a hook that takes a function and an array of dependencies
  useEffect(() => {
    fetchingPokemons();
  }, []);
  // pokemon is an object here in the pokemons array
  return (
    <div>
      <ul>
        {pokemons.map((pokemonObject) => (
          <li key={pokemonObject.name}>
            <button onClick={() => setSelectedPokemon(pokemonObject)}>
              {pokemonObject.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedPokemon && (
        <Details name={selectedPokemon.name} url={selectedPokemon.url} />
      )}
    </div>
  );
};
