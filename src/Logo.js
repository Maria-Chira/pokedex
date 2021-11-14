import React from "react";
const Logo = () => {
  let appName = "CYF's Pokedex";
  return (
    <header>
      <h1>Welcome to {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokedex Pokemon"
      ></img>
    </header>
  );
};

export default Logo;
