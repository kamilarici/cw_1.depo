import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { lightTheme, darktheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { myTheme } = useThemeContext();
  const themes = myTheme;
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
