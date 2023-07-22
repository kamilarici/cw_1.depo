import React from "react";
import TeamSwitch from "./TeamSwitch";

const Footer = ({ team, setTeam }) => {
  return (
    <div>
      <h5>footer</h5>
      <TeamSwitch setTeam={setTeam} team={team} />
    </div>
  );
};

export default Footer;
