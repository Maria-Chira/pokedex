import React from "react";
import Heading from "./Heading.js";
import Image from "./Image.js";
import List from "./List.js";
import DateToday from "./DateToday.js";


const MainParag = (props) => {
  return <p>My favourite Pokemon is {props.name}</p>;
};




const App = () => {
  return (
    <div>
      <Heading />
      <Image img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
      <MainParag name="Doe"/>
      <List />
      <DateToday date={new Date().toLocaleDateString()}/>
    </div>
  );
};

export default App;
