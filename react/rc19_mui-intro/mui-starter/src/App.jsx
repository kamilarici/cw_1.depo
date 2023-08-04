import Typo from "./components/Typo";
import TextFieldComp from "./components/TextFieldComp";
import CardComp from "./components/CardComp";
import AppBarComp from "./components/AppBarComp";
import { ThemeProvider, createTheme } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: deepOrange[500],
      },
      secondary: {
        main: deepPurple[200],
      },
      mor: {
        main: deepPurple[500],
        light: deepPurple[200],
        dark: deepPurple[800],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Typo />
      <TextFieldComp /> */}
        <AppBarComp />
        <CardComp />
      </ThemeProvider>
    </>
  );
}

export default App;
