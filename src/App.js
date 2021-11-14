import React from "react";

const Logo = () => {
   return (<header>
     <h1>Welcome to the Pokedex</h1>
     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokedex Pokemon"></img>
   </header>);
};

const BestPokemon = (props) => {
 return <p>My favorite Pokemon is {props.name}</p>;
};

const App = () => {
  return (
    <div>
      <Logo />
      <BestPokemon name="Squirtle" />
    </div>
  );
};
export default App;
