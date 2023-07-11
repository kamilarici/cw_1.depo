import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../assets/nba.jpg";

const PlayerCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlayerCard;
