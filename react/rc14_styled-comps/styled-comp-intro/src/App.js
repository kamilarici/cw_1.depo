import { Button, DarkButton, PinkButton } from "./components/Buton.styled";
import Flex from "./components/Flex";
import StyledLink from "./components/Links";
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
        <PinkButton>pembe</PinkButton>
        <PinkButton primary>içi boş</PinkButton>
      </Flex>

      <Flex>
        <StyledLink href="https://www.clarusway.com"> clarusway</StyledLink>
        <StyledLink react href="https://www.clarusway.com">
          {" "}
          react
        </StyledLink>
      </Flex>
      <Title renk="blue" bgRenk="grey">
        FLEXBOX
      </Title>
      <Title renk="blue">FLEXBOX</Title>
      <Flex bg="tomato">
        <h1>PROPS</h1>
      </Flex>
    </>
  );
};

export default App;
