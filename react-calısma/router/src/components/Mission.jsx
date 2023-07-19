import React from "react";
import { useNavigate } from "react-router-dom";

const Mission = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>mission</div>
      <button onClick={() => navigate(-1)}>geriye dön</button>
      {/* <button onClick={() => navigate("/")}>geriye dön</button> */}
    </div>
  );
};

export default Mission;
