import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

import { doctorData } from "../helpers/data";
import { useState } from "react";
const Doctors = () => {
  const [isClick, setisClick] = useState(false);
  const [show, setShow] = useState(false);
  const [alt, setAlt] = useState("");
  const [hasta, setHasta] = useState("");
  const [time, setTime] = useState(0);

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
  const handleHasta = (e) => {
    setHasta(...hasta, e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
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
      {/* //? ********************************* */}
      <div className="d-flex justify-content-between border border-success rounded-3 p-2">
        <div>
          <h4>{hasta}</h4>
          <h5>{alt}</h5>
        </div>
        <div>
          <h5>time</h5>
          <h6>{time}</h6>
        </div>
        <div>
          <button
            type="button"
            className="btn-close danger"
            aria-label="Close"
          />
        </div>
      </div>

      {/* //? ***************************** */}
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
                    onChange={handleHasta}
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
                    onChange={handleTime}
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
