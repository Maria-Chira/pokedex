import React from "react";
const CaughtPokemon = () => {
  let todayDate = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {todayDate}</p>;
};

export default CaughtPokemon;