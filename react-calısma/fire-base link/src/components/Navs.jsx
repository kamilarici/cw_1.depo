import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Image from "react-bootstrap/Image"
import { useContext } from "react"
import { FirebaseContext } from "../context/FireBaseContext"


function Navs() {
  // ! Consuming login context

  const { currentUser, logOut,setCurrentUser } = useContext(FirebaseContext)
console.log(currentUser);

  const LogOutLink = () => {
    setCurrentUser(false)
    logOut()
  }

  return (
    <Navbar expand="sm">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"200px"}
              src="https://clarusway.com/wp-content/uploads/2022/02/Adsiz-tasarim-4-1024x265.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link className="fw-bold">{currentUser}</Link>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className={`nav-link  `}  to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>
            {
              currentUser
                ? <Link className="nav-link" to="/login" onClick={LogOutLink}> Logout </Link>
                : <>
                  <Link className="nav-link" to="/login"> Login </Link>
                  <Link className="nav-link" to="/register" > Register </Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs
