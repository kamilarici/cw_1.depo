import CloseButton from "react-bootstrap/CloseButton";

import { doctorData } from "../helpers/data";
import { useState } from "react";
const Doctors = () => {
  //   const [isClick, setisClick] = useState(false);
  const [show, setShow] = useState(false);
  const [alt, setAlt] = useState("");
  //   const [hasta, setHasta] = useState("");
  //   const [time, setTime] = useState(0);

  //   const handleClose = (e) => {
  //     setShow(false);
  //   };
  const handleShow = (e) => {
    setShow(true);
    // console.log(e.target.alt);
    setAlt(e.target.alt);
  };
  //   const handleValues = (e) => {
  //     // console.log(e.target.alt);
  //     setAlt(alt);
  //   };
  //   const handleHasta = (e) => {
  //     setHasta(e.target.value);
  //   };
  //   const handleTime = (e) => {
  //     setTime(e.target.value);
  //   };
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

      {/* //? ***************************** */}
    </div>
  );
};
export default Doctors;
