import React from "react";
const List = () => {
  let array = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <ul>
      {array.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
export default List;
