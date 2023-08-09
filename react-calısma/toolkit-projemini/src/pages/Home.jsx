import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const result = await data.json();
      console.log(result);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>PRODUCTS</h1>
    </div>
  );
};

export default Home;
