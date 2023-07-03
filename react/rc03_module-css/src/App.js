import Card from "./components/card/Card";
import data from "./data";

function App() {
  return (
    <>
      {/* {iterasyon} */}
      {data.map(({ id, language, img, btnName }) => (
        <Card id={id} lang={language} img={img} btn={btnName} key={id} />
      ))}
    </>
  );
}

export default App;
