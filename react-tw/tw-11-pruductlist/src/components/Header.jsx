import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ProducContext from "../context/ProducContext";
const Header = () => {
  const { setData, Data } = useContext(ProducContext);

  const [actualData, setActualData] = useState();
  const getData = () => {
    const URL = "https://fakestoreapi.com/products ";
    axios.get(URL).then((res) => {
      setData(res.data);
      setActualData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  //   const handleFilter = (e) => {
  //     console.log(e.target.name);
  //     setData(actualData.filter((item) => item.category == e.target.name));
  //   };
  const handleFilter = (e) => {
    console.log(e.target.name);
    setData(actualData.filter((item) => item.category === e.target.name));
  };

  return (
    <div className="container text-center ">
      <h1 className="m-5">Products List</h1>
      <div className="">
        <Button className="m-1" onClick={getData} variant="primary">
          ALL
        </Button>{" "}
        <Button
          className="m-1"
          name="electronics"
          onClick={handleFilter}
          variant="secondary"
        >
          ELECTRONİCS
        </Button>{" "}
        <Button
          className="m-1"
          name="jewelery"
          onClick={handleFilter}
          variant="success"
        >
          JEWELERY
        </Button>{" "}
        <Button
          className="m-1"
          name="men's clothing"
          onClick={handleFilter}
          variant="warning"
        >
          MEN'S CLOTHİNG
        </Button>{" "}
        <Button
          className="m-1"
          name="women's clothing"
          onClick={handleFilter}
          variant="danger"
        >
          WOMEN'S CLOTHİNG
        </Button>{" "}
      </div>
    </div>
  );
};

export default Header;
