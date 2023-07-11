import { doctorData } from "../helpers/data";
import { useState } from "react";
import AddModal from "./AddModal";
const Doctors = () => {
  const [show, setShow] = useState(false);
  const [dName, setDName] = useState("");
  const handleClose = (e) => {
    setShow(false);
  };
  const handleShow = (e) => {
    setDName(e.target.alt);
    setShow(true);
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
      <AddModal handleClose={handleClose} show={show} dName={dName} />
    </div>
  );
};
export default Doctors;
