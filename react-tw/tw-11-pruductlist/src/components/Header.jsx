import React, { useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
const Header = ({ setData }) => {
  const getData = () => {
    const URL = "https://fakestoreapi.com/products ";
    axios.get(URL).then((res) => setData(res.data));
    // .catch((err)=>console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container text-center">
      <h1>Products List</h1>
      <div>
        <Button variant="primary">ALL</Button>{" "}
        <Button variant="secondary">ELECTRONİCS</Button>{" "}
        <Button variant="success">JEWELERY</Button>{" "}
        <Button variant="warning">MENS CLOTHİNG</Button>{" "}
        <Button variant="danger">WOMEN'S CLOTHİNG</Button>{" "}
      </div>
    </div>
  );
};

export default Header;
