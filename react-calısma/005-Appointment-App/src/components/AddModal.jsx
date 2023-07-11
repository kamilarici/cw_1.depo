import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AppointmentList from "./AppointmentList";
const AddModal = ({ show, dName, handleClose }) => {
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
              <label htmlFor="patientName" className="form-label fw-bold ">
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <AppointmentList />
    </>
  );
};
export default AddModal;
