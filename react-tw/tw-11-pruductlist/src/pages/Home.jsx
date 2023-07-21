import React, { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [data, setData] = useState();
  return (
    <div>
      <Header setData={setData} data={data} />

      <ProductCard data={data} />
    </div>
  );
};

export default Home;
