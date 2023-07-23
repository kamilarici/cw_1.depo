import React, { useContext } from "react";
import C from "./C";
import { UserContext } from "../App";

const B = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <h1>B</h1>
      <p>benim adım {name}</p>
      <C />
    </div>
  );
};

export default B;
