import React, { useState, useEffect, createContext } from "react";
export const Context = createContext();
const ProductContext = ({ children }) => {
  // Products state
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setproducts(data);
    };
    fetchProducts();
  }, []);
  return <Context.Provider value={{ products }}>{children}</Context.Provider>;
};

export default ProductContext;
