import React, { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [mokeData, setMokeData] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setProducts(data);
      setMokeData(data);
      const category = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categoryData = await category.json();

      setCategories(categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProducts = (item) => {
    console.log(item);
    setProducts(mokeData.filter((product) => product.category === item));
  };

  const filterAllProducts = () => {
    setProducts(mokeData);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const values = {
    categories,
    products,
    filterProducts,
    filterAllProducts,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProductContext = () => {
  return useContext(ProductContext);
};
