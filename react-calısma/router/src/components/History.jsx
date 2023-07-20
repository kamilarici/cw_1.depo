import React from "react";
import { Link, Outlet } from "react-router-dom";
const History = () => {
  return (
    <div>
      <div>History</div>
      <nav>
        <Link to="company">our company</Link>
        <Link to="team">team</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default History;
