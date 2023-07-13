import React from "react";

const User = () => {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => console.log(data.result[0]))
    .catch((err) => console.log(err));

  return (
    <div>
      <img src="" alt="" />
      <h4>hi my name is</h4>
      <h1>name</h1>
      <h3>email</h3>
      <h4>dob</h4>
      <h5>phone</h5>
      <h6>adress</h6>

      <button>get random</button>
    </div>
  );
};

export default User;
