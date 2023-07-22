import { MainContext, useContext } from "../context";

const Header = () => {
  const { team } = useContext(MainContext);
  return <div>Header {team}</div>;
};

export default Header;
