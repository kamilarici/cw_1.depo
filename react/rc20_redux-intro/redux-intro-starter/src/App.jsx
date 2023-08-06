import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux"; //! redux dan olacak
import { store } from "./store"; //! ****/index yazmıyor çünkü biliyor
function App() {
  return (
    <div className="app">
      {/* //? *******3333333********** */}
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
      {/* //? *******3333333**************** */}
    </div>
  );
}

export default App;
