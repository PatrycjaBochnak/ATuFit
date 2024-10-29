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

      const { protein, carbohydrates, fats } =
        this.calculateMacronutrients(fixedResultNumber);

      if (setResult) {
        setResult({ result: fixedResultNumber, protein, carbohydrates, fats });
      } else {
        console.warn("setResult is not defined");
      }

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
      <div className="calculator-BMR flex flex-col items-center justify-center h-screen bg-[#081325] text-white p-6">
        <div
          className="w-full max-w-2xl p-6 overflow-y-auto"
          style={{ maxHeight: "80vh" }}
        >
          <h3
            id="text"
            className="text-4xl font-bold inline border-b-4 border-pink-600"
          >
            Calculate BMR and TDEE
          </h3>
          <p id="text-2" className="mt-4 mb-8 text-lg">
            Firstly, insert your details to check Your BMR and Total Metabolism
          </p>
          <div id="button">
            <div className="form p-4 bg-gray-800 rounded-lg shadow-lg">
              {error && <div className="error text-red-400 mb-4">{error}</div>}

              <label className="input-gender block text-lg font-semibold mb-2">
                Gender
              </label>
              <div className="flex mb-4">
                <label className="mr-4">
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
                <label>
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

              <div className="input-weight mb-4">
                <label className="label block font-semibold">Weight (Kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={this.handleChange}
                  name="weight"
                  className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-900 text-white"
                  min="0"
                  max="999"
                />
              </div>

              <div className="input-height mb-4">
                <label className="label block font-semibold">Height (Cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={this.handleChange}
                  name="height"
                  className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-900 text-white"
                  min="0"
                  max="300"
                />
              </div>

              <div className="input-age mb-4">
                <label className="label block font-semibold">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={this.handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-900 text-white"
                  name="age"
                  min="0"
                  max="120"
                />
              </div>

              <button
                type="button"
                className="btn bg-blue-600 text-white py-3 px-5 rounded-md hover:bg-blue-700 transition duration-300 mb-4 w-full"
                onClick={this.calculateBMR}
              >
                Calculate BMR
              </button>

              {bmr && (
                <div className="result-BMR text-lg font-semibold mb-4">
                  Your basic metabolism is: {parseFloat(bmr).toFixed(0)}{" "}
                  calories
                </div>
              )}

              {flag && (
                <div className="workout">
                  <div className="input-workout mb-4">
                    <label className="label block font-semibold">
                      Workout in a Week
                    </label>
                    <select
                      className="activity mt-1 p-2 border border-gray-300 rounded w-full bg-gray-900 text-white"
                      value={activity}
                      onChange={this.handleChange}
                      name="activity"
                    >
                      <option value="">Select your Activity</option>
                      <option value="1.2">No exercise</option>
                      <option value="1.375">Light (1-3 times per week)</option>
                      <option value="1.55">
                        Moderately (3-5 times per week)
                      </option>
                      <option value="1.725">Heavy (6-7 times per week)</option>
                      <option value="1.9">
                        Very Heavy (6-7 times per week)
                      </option>
                    </select>
                  </div>
                  <button
                    className="btn bg-blue-600 text-white py-3 px-5 rounded-md hover:bg-blue-700 transition duration-300 w-full"
                    onClick={this.calculateFinalResult}
                  >
                    Calculate TDEE
                  </button>

                  {this.state.finalResult !== "" && (
                    <div className="result-TDEE text-lg font-semibold mt-4">
                      Your total metabolism is: {this.state.finalResult}{" "}
                      calories
                    </div>
                  )}
                </div>
              )}
            </div>
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
