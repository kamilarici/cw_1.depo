import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ConteinerCard from "./components/ConteinerCard";
import "./app.css";
import CardButton from "./components/CardButton";
import PlayerCard from "./components/PlayerCard";
import NavbarCard from "./components/NavbarCard";
import AlertCard from "./components/AlertCard";

function App() {
  return (
    <Container className="text-center mt-5">
      <NavbarCard />
      <br />

      <hr />

      <AlertCard />
      <br />

      <hr />
      <Header />
      <br />
      <hr />
      <ConteinerCard />
      <br />
      <hr />
      <CardButton />
      <br />
      <hr />
      <PlayerCard />
      <br />
      <hr />
    </Container>
  );
}

export default App;
