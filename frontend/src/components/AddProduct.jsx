import React, { useState } from "react";
import "../styles/AddProduct.css";
import TableExpansion from "../modules/TableExpansion";

const AddProduct = () => {
  const [data, setData] = useState("");

  return (
    <>
      <div className="add-product">
        <div id="#add-product">
          <h2>Not enough? Add missing products</h2>
          <TableExpansion />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
