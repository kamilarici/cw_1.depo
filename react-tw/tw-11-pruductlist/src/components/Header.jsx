import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
const Header = ({ setData, data }) => {
  const [actualData, setActualData] = useState();
  const getData = () => {
    const URL = "https://fakestoreapi.com/products ";
    axios.get(URL).then((res) => {
      setData(res.data);
      setActualData(res.data);
    });

    // .catch((err)=>console.log(err));
  };

  //   const handleFilter = (e) => {
  //     console.log(e.target.name);
  //     setData(actualData.filter((item) => item.category == e.target.name));
  //   };
  const handleFilter = (e) => {
    console.log(e.target.name);
    setData(actualData.filter((item) => item.category == e.target.name));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container text-center ">
      <h1 className="m-5">Products List</h1>
      <div className="">
        <Button onClick={getData} variant="primary">
          ALL
        </Button>{" "}
        <Button name="electronics" onClick={handleFilter} variant="secondary">
          ELECTRONİCS
        </Button>{" "}
        <Button name="jewelery" onClick={handleFilter} variant="success">
          JEWELERY
        </Button>{" "}
        <Button name="men's clothing" onClick={handleFilter} variant="warning">
          MENS CLOTHİNG
        </Button>{" "}
        <Button name="women's clothing" onClick={handleFilter} variant="danger">
          WOMEN'S CLOTHİNG
        </Button>{" "}
      </div>
    </div>
  );
};

export default Header;
