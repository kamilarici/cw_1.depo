import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { FirebaseContext } from "../context/FireBaseContext";

function Navs() {
  // ! Consuming login context

  const { currentUser, logOut, setCurrentUser } = useContext(FirebaseContext);
  console.log(currentUser);

  const LogOutLink = () => {
    setCurrentUser(false);
    logOut();
  };

  return (
    <Navbar expand="sm">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <div className="user-div d-flex align-items-center">
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt=""
                  width={"50px"}
                  className="rounded-5"
                />
              ) : (
                <span className="d-flex align-items-center justify-content-center">
                  <i className="fa-regular fa-user fs-4 p-1 border rounded-5   "></i>
                </span>
              )}

              <div>
                <p className="d-flex align-items-center">{currentUser}</p>
              </div>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="fw-bold">{currentUser}</Link>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className={`nav-link  `} to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>
            {currentUser ? (
              <Link className="nav-link" to="/login" onClick={LogOutLink}>
                Logout
              </Link>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
