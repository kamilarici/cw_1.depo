import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddModal = () => {
  return (
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
  );
};

export default AddModal;
