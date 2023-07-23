import A from "./components/A";
import { UserProvider } from "./contexts/UserContexts";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <h1>App</h1>
        <A />
      </UserProvider>
    </div>
  );
}

export default App;
