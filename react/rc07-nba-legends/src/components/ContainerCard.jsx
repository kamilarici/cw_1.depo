import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContainerCard = () => {
  return (
    <>
      <Form.Control type="search" placeholder="Search Player..." />
      <Container className="p-3 rounded-4 card-container">
        <Row xs={2} md={4} lg={6} className="justify-content-center g-3">
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>3 of 2</Col>
        </Row>
      </Container>
    </>
  );
};

export default ContainerCard;
