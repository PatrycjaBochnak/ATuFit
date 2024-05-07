import React, { useState } from "react";
import "../styles/TableExpansion.css";

function TableExpansion() {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    fat: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="table-expansion">
        <button
            className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center" onClick={toggleExpand}>Add your own product</button>
      {expanded && (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="name"
            />
          </label>
          <label>
            Calories:
            <input
              type="text"
              name="calories"
              value={formData.calories}
              onChange={handleChange}
            />
          </label>
          <label>
            Fats:
            <input
              type="text"
              name="fat"
              value={formData.fat}
              onChange={handleChange}
            />
          </label>
          <label>
            Carbohydrates:
            <input
              type="text"
              name="carbohydrates"
              value={formData.carbohydrates}
              onChange={handleChange}
            />
          </label>
          <label>
            Proteins:
            <input
              type="text"
              name="proteins"
              value={formData.proteins}
              onChange={handleChange}
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
