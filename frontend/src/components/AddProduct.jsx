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
  return (
    <div className="add-product flex flex-col items-center min-h-screen bg-[#081325] text-gray-300 p-6">
      <div className="text-center mb-8">
        <h2 id="text" className="text-4xl font-bold border-b-4 border-pink-600 pb-2">Add Product</h2>
        <p id="text-2" className="mt-4 text-lg">Not enough? Add missing products</p>
      </div>
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <form id="form" onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Name", name: "name", type: "text", placeholder: "Type product name..." },
            { label: "Calories", name: "calories", type: "number", placeholder: "Calories..." },
            { label: "Fats", name: "fats", type: "number", placeholder: "Fats..." },
            { label: "Carbohydrates", name: "carbohydrates", type: "number", placeholder: "Carbs..." },
            { label: "Proteins", name: "proteins", type: "number", placeholder: "Proteins..." },
          ].map((input, index) => (
            <label key={index} className="block text-left">
              <span className="text-gray-200">{input.label}:</span>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                value={formData[input.name]}
                onChange={handleChange}
                className="mt-1 block w-full bg-[#081325] text-gray-300 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-600"
                required
                min="0"
                max="999"
              />
            </label>
          ))}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;