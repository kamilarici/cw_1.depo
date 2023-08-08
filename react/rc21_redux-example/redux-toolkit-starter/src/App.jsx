import { store } from "./app/store";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";

//? ************3333333333***********
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
