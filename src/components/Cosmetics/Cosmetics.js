import React, { memo, useEffect, useState } from "react";
import Cosmetic from "./Cosmetic";
// import { add } from "../../Utilities/calculate";
// import add from "../../Utilities/calculate";

const Cosmetics = memo(() => {
  // const first = 55;
  // const second = 66;
  // const total = add(first, second);

  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      {/* <p>Total: {total}</p> */}

      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
});

export default Cosmetics;
