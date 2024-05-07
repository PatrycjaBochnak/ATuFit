import React, { useState } from "react";
import axios from "axios";
import "../styles/AddProduct.css";
import { useEffect } from "react";
import TableExpansion from "../modules/TableExpansion";

const AddProduct = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/hello");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="add-product">
        <div id="#add-product">
          <h3>Not enough? Add missing products :)</h3>
          <div className="api">{data}</div>
          <TableExpansion/>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
