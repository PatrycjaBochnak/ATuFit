import React, { Component } from "react";
import { useCalculator } from "./CalculatorContext";

class CalculatorBMR extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      weight: "",
      age: "",
      height: "",
      activity: "",
      bmr: "",
      error: "",
      flag: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculateBMR = () => {
    const { age, weight, height, gender } = this.state;

    if (!age || !weight || !height || !gender) {
      this.setState({ error: "All fields are required" });
      return;
    }

    try {
      let bmrCalc = 0;
      if (gender === "1") {
        bmrCalc = 655 + 9.563 * weight + 1.85 * height - 4.676 * age; // Female BMR
      } else if (gender === "2") {
        bmrCalc = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age; // Male BMR
      } else {
        throw new Error("Invalid gender selection");
      }

      this.setState({ bmr: bmrCalc, flag: true, error: "" });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  calculateFinalResult = () => {
    const { bmr, activity } = this.state;
    const { setResult } = this.props;

    if (!bmr || !activity) {
      this.setState({ error: "All fields are required" });
      return;
    }

    try {
      const ActCalc = bmr * parseFloat(activity);
      const fixedResultNumber = parseInt(ActCalc.toFixed(0));
      console.log("Final Result Number:", fixedResultNumber);

      console.log("BMR:", bmr);
      console.log("Activity:", activity);
      console.log("Calculated ActCalc:", ActCalc);
      console.log("Fixed Result Number:", fixedResultNumber);

      this.setState({ finalResult: fixedResultNumber });
      const { protein, carbohydrates, fats } = this.calculateMacronutrients(fixedResultNumber);
      setResult({ fixedResultNumber, protein, carbohydrates, fats });

      this.setState({ error: "", flag: true });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  calculateMacronutrients = (finalResultNumber) => {
    const proteinPercent = 20;
    const carbohydratePercent = 50;
    const fatPercent = 30;

    const protein = (finalResultNumber * proteinPercent) / 100 / 4;
    const carbohydrates = (finalResultNumber * carbohydratePercent) / 100 / 4;
    const fats = (finalResultNumber * fatPercent) / 100 / 9;

    return { protein, carbohydrates, fats };
  };

  render() {
    const { age, weight, height, gender, activity, bmr, error, flag } =
      this.state;

    return (
      <div className="calculator-BMR flex flex-col items-center justify-center min-h-screen bg-[#081325] text-white p-4">
        <div
          className="w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-lg overflow-y-auto"
          style={{ maxHeight: "90vh" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold inline border-b-4 border-pink-600">
            Calculate BMR and TDEE
          </h3>
          <p className="mt-3 mb-6 text-sm md:text-base">
            Firstly, insert your details to check Your BMR and Total Metabolism
          </p>
          <div className="form space-y-4">
            {error && <div className="error text-red-400 text-sm">{error}</div>}

            <div>
              <label className="block text-sm font-semibold mb-1">Gender</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={gender === "1"}
                    onChange={this.handleChange}
                    className="mr-1"
                    name="gender"
                    value="1"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={gender === "2"}
                    onChange={this.handleChange}
                    className="mr-1"
                    name="gender"
                    value="2"
                  />
                  Male
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Weight (Kg)</label>
              <input
                type="number"
                value={weight}
                onChange={this.handleChange}
                name="weight"
                className="w-full p-2 border border-gray-300 rounded bg-gray-900 text-white"
                min="0"
                max="999"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Height (Cm)</label>
              <input
                type="number"
                value={height}
                onChange={this.handleChange}
                name="height"
                className="w-full p-2 border border-gray-300 rounded bg-gray-900 text-white"
                min="0"
                max="300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={this.handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-900 text-white"
                name="age"
                min="0"
                max="120"
              />
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={this.calculateBMR}
            >
              Calculate BMR
            </button>

            {bmr && (
              <div className="text-sm font-semibold mt-4">
                Your basic metabolism is: {parseFloat(bmr).toFixed(0)} calories
              </div>
            )}

            {flag && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Workout in a Week
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded bg-gray-900 text-white"
                    value={activity}
                    onChange={this.handleChange}
                    name="activity"
                  >
                    <option value="">Select your Activity</option>
                    <option value="1.2">No exercise</option>
                    <option value="1.375">Light (1-3 times per week)</option>
                    <option value="1.55">Moderately (3-5 times per week)</option>
                    <option value="1.725">Heavy (6-7 times per week)</option>
                    <option value="1.9">Very Heavy (6-7 times per week)</option>
                  </select>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                  onClick={this.calculateFinalResult}
                >
                  Calculate TDEE
                </button>

                {this.state.finalResult !== "" && (
                  <div className="text-sm font-semibold mt-4">
                    Your total metabolism is: {this.state.finalResult} calories
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const CalculatorBMRWithContext = () => {
  const { setResult } = useCalculator();
  return <CalculatorBMR setResult={setResult} />;
};

export default CalculatorBMRWithContext;