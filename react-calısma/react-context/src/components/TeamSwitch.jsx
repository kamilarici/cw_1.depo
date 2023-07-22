import React from "react";

const TeamSwitch = ({ team, setTeam }) => {
  const switchTheme = () => {
    setTeam(team === "light" ? "dark" : "light");
  };
  return (
    <div>
      <button onClick={switchTheme}>switch team</button>
    </div>
  );
};

export default TeamSwitch;
