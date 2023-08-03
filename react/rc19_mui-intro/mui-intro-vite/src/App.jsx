import AppbarComp from "./components/AppbarComp";
import CardComp from "./components/CardComp";
import TextFieldComp from "./components/TextFieldComp";
import Typo from "./components/Typo";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange, deepPurple, lime } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#bede",
      },
      secondary: {
        main: deepPurple[500],
      },
      error: {
        main: lime["A400"],
      },
      koyuMor: {
        main: deepPurple[500],
        light: deepPurple[300],
        dark: deepPurple[800],
        contrastText: "white",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typo />
        <TextFieldComp />
        <AppbarComp />
        <CardComp />
      </ThemeProvider>
    </>
  );
}

export default App;
