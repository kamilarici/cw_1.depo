import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { FirebaseContext } from "../context/FireBaseContext"

const Login = () => {
  const navigate = useNavigate()

  const { setCurrentUser , LoginGoogle, LoginUser} = useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    let email = e.target[0].value
    let password = e.target[1].value

  /*   setCurrentUser({
      email:email,
      password:password
    }) */

    LoginUser(email,password)
   

    navigate(-1)

  }

  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="pasword" >
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
        <Container className="text-center d-flex  justify-content-center align-items-center gap-3">
          <Button variant="danger" type="submit">
            Login
          </Button>

          <Button variant="primary " type="button" onClick={LoginGoogle}>
            Continue With Google
          </Button>

        </Container>
      </Form>
    </Container>
  )
}

export default Login
