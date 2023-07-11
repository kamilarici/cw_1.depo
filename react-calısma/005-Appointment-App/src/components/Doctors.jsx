import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { doctorData } from "../helpers/data";
import { useState } from "react";
const Doctors = () => {
  const [isClick, setisClick] = useState(false);
  const [show, setShow] = useState(false);
  const [alt, setAlt] = useState("");

  const handleClose = (e) => {
    setShow(false);
  };
  const handleShow = (e) => {
    setShow(true);
    // console.log(e.target.alt);
    setAlt(e.target.alt);
  };
  const handleValues = (e) => {
    // console.log(e.target.alt);
    setAlt(alt);
  };
  return (
    <div className="container">
      <h1>CLARUS HOSPITAL</h1>
      <h3>Our Doctors</h3>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {doctorData.map((doc, i) => {
          const { name, dep, img, id } = doc;
          return (
            <div
              key={id}
              className="card text-center justify"
              style={{ width: "13rem" }}
            >
              <img
                onClick={handleShow}
                // onClick={handleValues}
                src={img}
                className="card-img-top"
                alt={name}
              />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{dep} </p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-danger">
                Appointment for {alt}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label htmlFor="PatientName" className="form-label fw-bold">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="PatientName"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3 fw-bold">
                  <label htmlFor="dayTime" className="form-label">
                    Day&Time
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="dayTime"
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
              <Button variant="primary" onClick={handleClose}>
                Submit
              </Button>
              <Button variant="danger " onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </div>
  );
};
export default Doctors;
