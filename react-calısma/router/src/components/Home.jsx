import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>home</div>
      <button onClick={() => navigate("/mission")}>mission a git</button>
    </div>
  );
};

export default Home;
