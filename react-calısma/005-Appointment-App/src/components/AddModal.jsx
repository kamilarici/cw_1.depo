import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AppointmentList from "./AppointmentList";
import { useState } from "react";
const AddModal = ({ show, dName, handleClose }) => {
  const [patientInf, setpatientInf] = useState({});
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            Appointment for {dName}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label
                htmlFor="patientName"
                className="form-label fw-bold "
                name="patientName"
              >
                Patient Name
              </label>
              <input
                type="text"
                className="form-control"
                id="patientName"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dataTime" className="form-label fw-bold">
                Day&Time
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="dataTime"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <AppointmentList />
    </>
  );
};
export default AddModal;
