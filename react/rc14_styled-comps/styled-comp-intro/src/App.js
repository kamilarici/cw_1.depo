import { Button, DarkButton } from "./components/Buton.styled"
import Flex from "./components/Flex"

const App = () => {
  return (
    <>
      <Flex bg="#bebe">
        <h1>Styled Components</h1>
        <Button>Tikla</Button>
        <DarkButton>Send</DarkButton>
      </Flex>

      <Flex bg="tomato">
        <h1>PROPS</h1>
      </Flex>
    </>
  )
}

export default App
