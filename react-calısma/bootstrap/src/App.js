import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ConteinerCard from "./components/ConteinerCard";

function App() {
  return (
    <Container className="text-center mt-5">
      <Header />
      <ConteinerCard />
    </Container>
  );
}

export default App;
