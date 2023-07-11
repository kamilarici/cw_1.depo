import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ConteinerCard = () => {
  return (
    <>
      {/* //! input içine çarpi ikonu getirmek için type:search yapmak gerekiyor.html getiriyor */}
      <Form.Control type="search" placeholder="Sarch Player" />
      <Container className="p-3 rounded-4 card-container my-4">
        <Row xs={2} md={4} lg={6} className="justfy-contetnt-center g-4">
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>3 of 2</Col>
          <Col>3 of 2</Col>
          <Col>3 of 2</Col>
          <Col>3 of 2</Col>
          <Col>3 of 2</Col>
          <Col>3 of 2</Col>
        </Row>
      </Container>
    </>
  );
};

export default ConteinerCard;
