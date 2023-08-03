import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { FirebaseContext } from "../context/FireBaseContext"

const Register = () => {
  const navigate = useNavigate()

  const { setCurrentUser,createUser } = useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    let name = e.target[0].value + " " + e.target[1].value
    let email = e.target[2].value
    let password = e.target[3].value

/*     setCurrentUser({
      email:email,
      password:password
    }) */

    createUser(email , password, name  )

    navigate('/')

  }

  return (
    <Container>
      <h1 className="text-center mt-4">REGISTER PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="Name" >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            required/>

        </Form.Group><Form.Group className="mb-3" controlId="surname" >
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your surname"
            name="surname"
            required/>

        </Form.Group>
        <Form.Group className="mb-3" controlId="pasword" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            required/>

        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            required/>
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  )
}

export default Register
