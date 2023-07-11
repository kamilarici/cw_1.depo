import React from "react";

const AppointmentList = () => {
  return (
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
        <button type="button" className="btn-close danger" aria-label="Close" />
      </div>
    </div>
  );
};

export default AppointmentList;
