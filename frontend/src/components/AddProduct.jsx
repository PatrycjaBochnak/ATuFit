import React from "react";
import FetchData from "./FetchData";
import "../styles/AddProduct.css";

const AddProduct = () => {
  return (
    <div className="add-product">
      <h3>Not enough? Add your own product</h3>
      <FetchData />
      <FetchData url="http://localhost:3001/hello" />
      <FetchData url="http://localhost:3001/users" />
      <FetchData url="http://localhost:3001/products" />
    </div>
  );
};

export default AddProduct;
