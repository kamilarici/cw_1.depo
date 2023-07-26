import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
function App() {
  const styles = {
    colors: {
      primary: "#eee",
      secondary: "#bebe",
      dark: "black",
    },
    breakpoints: {},
  };
  return (
    <div className="App">
      <ThemeProvider theme={styles}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
