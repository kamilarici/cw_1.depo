import React from "react";
import { UserContext } from "../App";

const C = () => {
  return (
    <div>
      <UserContext.Consumer>
        <h1>C</h1>
        <h1>benim adım </h1>
      </UserContext.Consumer>
    </div>
  );
};

export default C;
