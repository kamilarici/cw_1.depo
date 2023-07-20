import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const PersonDetail = () => {
  let { state: person } = useLocation();
  let navigate = useNavigate();
  // console.log(person);
  //? *****************useparams**********
  // const [people, setPeople] = useState([]);
  // let { id } = useParams();
  // const getPeople = () => {
  //   fetch(`https://reqres.in/api/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPeople(data.data))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getPeople();
  // }, []);

  //? ************************** */

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
