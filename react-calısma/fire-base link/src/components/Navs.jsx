import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useContext } from "react"
import { FirebaseContext } from "../context/FireBaseContext"


function Navs() {
  // ! Consuming login context

  const { currentUser, logOut, setCurrentUser } = useContext(FirebaseContext)

  const LogOutLink = () => {
    setCurrentUser(false)
    logOut()
  }

  return (
    <Navbar expand="sm">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <div className="user-div d-flex justify-content-center align-items-center ">

              {
                currentUser.photoURL
                  ? <img src={currentUser.photoURL} alt="" width="50px" className="rounded-5 " />
                  : <span className="p-2  border rounded-5 text-white bg-dark ">
                    <i className="fa-regular fa-user fs-4 "></i>
                    </span>
              }

              <p className="p-2 pt-3 ">{currentUser.displayName}</p>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className={`nav-link  `} to="/about">
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
