import { Button, DarkButton } from "./components/Buton.styled";
import Flex from "./components/Flex";
import Title from "./components/Title";

const App = () => {
  return (
    <>
      <Flex bg="#bebe">
        <Title renk="white" bgRenk="red">
          Styled Componentsvv
        </Title>
        <Button>Tikla</Button>
        <DarkButton>Send</DarkButton>
      </Flex>

      <Flex bg="tomato">
        <h1>PROPS</h1>
      </Flex>
    </>
  );
};

export default App;
