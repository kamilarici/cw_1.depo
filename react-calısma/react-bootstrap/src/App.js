import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>Hello Reactt</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-danger">gönder</button>
            <Alert variant={"danger"}>
              This is a alert with
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>
            <Button variant="success">ekle</Button>
            <Button variant="warning">ekle</Button>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2023/06/24/14/21/flamingo-8085305_640.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
