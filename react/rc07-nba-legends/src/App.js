import ContainerCard from "./components/ContainerCard";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <Container className="text-center mt-5">
      <Header />
      <ContainerCard />
    </Container>
  );
}

export default App;
