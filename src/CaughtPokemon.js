import React, { useState } from "react";

// function renderName() {
//   let arrayNames=["Maria", "Marcus", "Hiba", "Wiam"];
//   return arrayNames[Math.floor(Math.random()*arrayNames.length)];
// }

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const catchPokemon = () => {
    if (pokemonNameInput.length>0){
      setCaught((caught) => caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }else{
      alert("Invalid input");
    }
  };
  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch!</button>
      <p>
        Caught {caught.length} Pokemon on {props.todayDate}
      </p>
      <ul>
        {caught.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;