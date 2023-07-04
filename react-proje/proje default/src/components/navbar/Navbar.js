import logo from "../../helper/logo/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="nav_list">
        <ul>
          <li>
            <a href="#">HOROSCOPE</a>
          </li>
          <li>
            {" "}
            <a href="#">DAILY</a>
          </li>
          <li>
            <a href="#">TAROT</a>
          </li>
          <li>
            <a href="#">ARTİCLE</a>
          </li>
          <li>
            {" "}
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
