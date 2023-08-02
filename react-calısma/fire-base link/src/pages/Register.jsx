import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FirebaseContext } from "../context/FireBaseContext";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const { setCurrentUser, createUser } = useContext(FirebaseContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentUser({
      email: e.target[2].value,
      password: e.target[3].value,
    });
    // createUserWithEmailAndPassword(auth, e.target[2].value, e.target[3].value);
    createUser(e.target[2].value, e.target[3].value);
    navigate(-1);
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Register PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>NAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>SURNAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your surname"
            name="surname"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Register;
