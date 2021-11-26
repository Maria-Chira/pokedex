import React, { useState } from "react";

function renderName() {
  let arrayNames=["Maria", "Marcus", "Hiba", "Wiam"];
  return arrayNames[Math.floor(Math.random()*arrayNames.length)];
}

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const catchPokemon = () => {
    setCaught((caught) => caught.concat(renderName()));
  };
  return (
    <>
      <button onClick={catchPokemon}>Catch!</button>
      <p>
        Caught {caught.length} Pokemon on {props.todayDate}
      </p>
      <ul>
        {caught.map((item, index) => (
           <li key={index}> {item}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;