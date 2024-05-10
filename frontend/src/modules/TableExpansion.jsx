import React, { useState } from "react";
import axios from "axios";
import "../styles/TableExpansion.css";

function TableExpansion() {
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
      })
      .catch(
        (error) => {
          console.log("Error:", error.message);
        },
        [handleSubmit]
      );
  };
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="table-expansion">
      <button
        className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center align-content-center align-items-center"
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
              className="name"
            />
          </label>
          <label className="label">
            Calories:
            <input
              type="text"
              name="calories"
              placeholder="Calories..."
              value={formData.calories}
              onChange={handleChange}
              className="calories"
            />
          </label>
          <label className="label">
            Fats:
            <input
              type="text"
              name="fats"
              placeholder="Fats..."
              value={formData.fats}
              onChange={handleChange}
              className="fats"
            />
          </label>
          <label className="label">
            Carbs:
            <input
              type="text"
              name="carbohydrates"
              placeholder="Carbs..."
              value={formData.carbohydrates}
              onChange={handleChange}
              className="carbohydrates"
            />
          </label>
          <label className="label">
            Proteins:
            <input
              type="text"
              name="proteins"
              placeholder="Proteins..."
              value={formData.proteins}
              onChange={handleChange}
              className="proteins"
            />
          </label>
          <button
            className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default TableExpansion;
