import React from "react";
import { add, multiply } from "../../Utilities/calculate";

const Shoes = () => {
  const first = 13;
  const second = 11;
  const result = multiply(first, second);
  const sum = add(first, second);
  return (
    <div>
      <h3>This is my shoes store</h3>
      <p>
        Resutl: {result} and total: {sum}
      </p>
    </div>
  );
};

export default Shoes;
