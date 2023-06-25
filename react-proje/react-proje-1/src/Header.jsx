import img from "./img/Clarusway.png";

const Header = () => {
  return (
    <header className="header1">
      <div className="header1-img">
        <img src={img} alt="" />
      </div>
      <div className="header1-home">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
};

export default Header;
