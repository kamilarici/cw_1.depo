import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import logo from "../assets/nba-logo.png";
const Header = () => {
  return (
    <Container>
      <Image src={logo} width="200px" />
      <h1>NBA LEGENDS</h1>
    </Container>
  );
};

export default Header;
