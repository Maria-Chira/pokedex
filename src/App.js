import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";


const App = () => {
  let abilities = ["Anticipation","Adaptability","Run-Away"];
   let todayDate = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon todayDate={todayDate} />
    </div>
  );
};
export default App;
