import Form from "./components/1-forms/Form";
import FormObject from "./components/1-forms/FormObject";
import KeyboardEvents from "./components/2-keyboardClipboardEvents/KeyboardClipboard";
import MouseEvent from "./components/3-mouseEvents/MouseEvent";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Form />
      <FormObject />
      {/* <KeyboardEvents />
      <MouseEvent /> */}
    </div>
  );
}

export default App;
