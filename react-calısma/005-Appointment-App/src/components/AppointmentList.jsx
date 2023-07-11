import React, { useState } from "react";
const AppointmentList = ({ item, name }) => {
  const [isConsulted, setisConsulted] = useState(false);
  console.log(item);
  return (
    <div
      className="d-flex justify-content-between border border-success rounded-3 p-2"
      onDoubleClick={() => setisConsulted(!isConsulted)}
    >
      <div className="relative">
        {isConsulted ? (
          <div className=" bg-danger absolite">consulted</div>
        ) : null}
        <div>
          <h4>{item.patientName}</h4>
          <h5>dr. {name}</h5>
        </div>
        <div>
          <h5>time</h5>
          <h6>{item.dataTime}</h6>
        </div>
        <div>
          <button
            type="button"
            className="btn-close danger"
            aria-label="Close"
          />
        </div>
      </div>
    </div>
  );
};
export default AppointmentList;
