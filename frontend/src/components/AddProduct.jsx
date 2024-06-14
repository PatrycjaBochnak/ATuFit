import React, { useState } from "react";
import axios from "axios";
import "../styles/AddProduct.css";

const AddProduct = () => {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    calories: "",
    fats: "",
    carbohydrates: "",
    proteins: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3001/api/submitData", formData)
      .then((res) => {
        alert(res.data.message);
        handleClearForm();
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  const handleClearForm = () => {
    setFormData({
      id: "",
      name: "",
      calories: "",
      fats: "",
      carbohydrates: "",
      proteins: "",
    });
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="add-product">
      <h2>Not enough? Add missing products</h2>
      <div className="table-expansion">
        <button
          className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center align-items-center align-content-center btn-same-width"
          onClick={toggleExpand}
        >
          Add your own product
        </button>
        {expanded && (
          <form id="form" onSubmit={handleSubmit}>
            <label className="label">
              Name:
              <input
                type="text"
                name="name"
                placeholder="Type product name..."
                value={formData.name}
                onChange={handleChange}
                className="input"
              />
            </label>
            <label className="label">
              Calories:
              <input
                type="number"
                name="calories"
                placeholder="Calories..."
                value={formData.calories}
                onChange={handleChange}
                className="input"
                min="0"
                max="999"
              />
            </label>
            <label className="label">
              Fats:
              <input
                type="number"
                name="fats"
                placeholder="Fats..."
                value={formData.fats}
                onChange={handleChange}
                className="input"
                min="0"
                max="999"
              />
            </label>
            <label className="label">
              Carbs:
              <input
                type="number"
                name="carbohydrates"
                placeholder="Carbs..."
                value={formData.carbohydrates}
                onChange={handleChange}
                className="input"
                min="0"
                max="999"
              />
            </label>
            <label className="label">
              Proteins:
              <input
                type="number"
                name="proteins"
                placeholder="Proteins..."
                value={formData.proteins}
                onChange={handleChange}
                className="input"
                min="0"
                max="999"
              />
            </label>
            <div className="submit-container">
              <button
                className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center align-items-center align-content-center btn-same-width"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
