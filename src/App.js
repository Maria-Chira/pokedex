import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";


const App = () => {
  let abilities = ["Anticipation","Adaptability","Run-Away"];
  let todayDate = new Date().toLocaleDateString();
  function logWhenClicked() {
    console.log("test");
  }
  return (
    <div>
      <Logo onClick={logWhenClicked} appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon todayDate={todayDate} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};
export default App;
