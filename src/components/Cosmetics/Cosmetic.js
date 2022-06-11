import React from "react";
import { addToDb } from "../../Utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCard = (id) => {
    addToDb(id);
  };

  // const addToCardParam = () => addToCard(id);

  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only for: ${price}</p>
      <p>It has id: {id}</p>
      <button onClick={() => addToCard(id)}>Add to Card</button>
    </div>
  );
};

export default Cosmetic;
