import { MainContext, useContext } from "../context";

const TeamSwitch = () => {
  const { team, setTeam } = useContext(MainContext);
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
