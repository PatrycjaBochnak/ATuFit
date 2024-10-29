import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProduct = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#text-2", { delay: 2000, origin: "top" });
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
    sr.reveal("#content-2", { delay: 2000, origin: "bottom" });
    sr.reveal("#button", { delay: 3000, origin: "bottom" });
  }, [sr]);

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
    <div className="add-product flex flex-col items-center h-screen bg-[#081325] text-gray-300 p-6">
      <div className="text-center mb-8">
        <h2 id="text" className="text-4xl font-bold inline border-b-4 border-pink-600">
          Add Product
        </h2>
        <p id="text-2" className="mt-4 mb-2 text-lg max-w-prose mx-auto">
          Not enough? Add missing products
        </p>
      </div>

      <div className="table-expansion text-center">
        <button
          id="button"
          onClick={toggleExpand}
          className="py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 mb-4"
        >
          {expanded ? "Hide Form" : "Add Your Own Product"}
        </button>

        {expanded && (
          <form
            id="form"
            onSubmit={handleSubmit}
            className="mt-8 bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
          >
            <div className="grid grid-cols-1 gap-6">
              <label className="block text-left">
                <span className="text-gray-200">Name:</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Type product name..."
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-[#081325] text-gray-300 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-pink-600"
                  required
                />
              </label>

              <label className="block text-left">
                <span className="text-gray-200">Calories:</span>
                <input
                  type="number"
                  name="calories"
                  placeholder="Calories..."
                  value={formData.calories}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-[#081325] text-gray-300 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-pink-600"
                  required
                  min="0"
                  max="999"
                />
              </label>

              <label className="block text-left">
                <span className="text-gray-200">Fats:</span>
                <input
                  type="number"
                  name="fats"
                  placeholder="Fats..."
                  value={formData.fats}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-[#081325] text-gray-300 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-pink-600"
                  required
                  min="0"
                  max="999"
                />
              </label>

              <label className="block text-left">
                <span className="text-gray-200">Carbohydrates:</span>
                <input
                  type="number"
                  name="carbohydrates"
                  placeholder="Carbs..."
                  value={formData.carbohydrates}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-[#081325] text-gray-300 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-pink-600"
                  required
                  min="0"
                  max="999"
                />
              </label>

              <label className="block text-left">
                <span className="text-gray-200">Proteins:</span>
                <input
                  type="number"
                  name="proteins"
                  placeholder="Proteins..."
                  value={formData.proteins}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-[#081325] text-gray-300 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-pink-600"
                  required
                  min="0"
                  max="999"
                />
              </label>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 w-full"
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
