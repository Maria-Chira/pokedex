import React from "react";

const Logo = () => {
  let appName = "CYF's Pokedex";
   return (
     <header>
       <h1>Welcome to {appName}</h1>
       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokedex Pokemon"></img>
     </header>
   );
};



const BestPokemon = () => {
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favorite Pokemon is.</p>
      <ul>
        {abilities.map((ability) => (
          <li>{ability}</li>
        ))}
      </ul>
    </div>);
  };

const CaughtPokemon = () => {
  let todayDate = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {todayDate}</p>;
};

const App = () => {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
};
export default App;
