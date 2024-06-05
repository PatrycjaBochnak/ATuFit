import React, { Component } from "react";
import Cookies from "js-cookie";
import "../styles/CalculatorBMR.css";

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
      system: "",
      finalResult: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculateBMR = () => {
    const { age, weight, height, gender, system } = this.state;

    if (!age || !weight || !height || !gender) {
      this.setState({ error: "All fields are required" });
      return;
    }

    let bmrCalc = 0;
    if (gender === "1") {
      // Female
      bmrCalc = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
    } else if (gender === "2") {
      // Male
      bmrCalc = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
    }

    this.setState({ bmr: bmrCalc, flag: true, error: "" });
  };

  calculateFinalResult = () => {
    const { bmr, activity } = this.state;
    let ActCalc = 0;

    if (activity) {
      ActCalc = bmr * parseFloat(activity);
      const fixedResultNumber = parseInt(ActCalc.toFixed(0));

      this.setState({ finalResult: fixedResultNumber }, () => {
        const { protein, carbohydrates, fats } =
          this.calculateMacronutrients(fixedResultNumber);
        this.setCookie(fixedResultNumber, protein, carbohydrates, fats);
      });
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

  setCookie = (finalResultNumber, protein, carbohydrates, fats) => {
    Cookies.set("finalResult", finalResultNumber, { expires: 7 });
    Cookies.set("protein", protein.toFixed(1), { expires: 7 });
    Cookies.set("carbohydrates", carbohydrates.toFixed(1), { expires: 7 });
    Cookies.set("fats", fats.toFixed(1), { expires: 7 });
  };

  render() {
    const {
      age,
      weight,
      height,
      gender,
      activity,
      bmr,
      error,
      flag,
      finalResult,
    } = this.state;

    return (
      <div className="calculator-BMR">
        <h2>Firstly, insert your details to check Your BMR and Total Metabolism</h2>
        <div id="bmr-calc">
          <div className="form">
            {error && <div className="error">{error}</div>}

            <label className="input-gender">Gender</label>
            <label>
              <input
                type="radio"
                checked={gender === "1"}
                onChange={this.handleChange}
                className="genderF"
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
                className="genderM"
                name="gender"
                value="2"
              />
              Male
            </label>

            <div className="input-weight">
              <label className="label">Weight (Kg)</label>
              <input
                type="number"
                value={weight}
                onChange={this.handleChange}
                name="weight"
                className="weight"
                min="0"
                max="999"
              />
            </div>

            <div className="input-height">
              <label className="label">Height (Cm)</label>
              <input
                type="number"
                value={height}
                onChange={this.handleChange}
                name="height"
                className="height"
                min="0"
                max="300"
              />
            </div>

            <div className="input-age">
              <label className="label">Age</label>
              <input
                type="number"
                value={age}
                onChange={this.handleChange}
                className="age"
                name="age"
                min="0"
                max="120"
              />
            </div>

            <button
              type="button"
              className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center buttonBMR"
              onClick={this.calculateBMR}
            >
              Calculate BMR
            </button>

            {bmr && (
              <div className="result-BMR">
                Your basic metabolism is: {parseFloat(bmr).toFixed(0)} calories
              </div>
            )}

            {flag && (
              <div className="workout">
                <div className="input-workout">
                  <label className="label">Workout in a Week</label>
                  <select
                    className="activity"
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
                  className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center"
                  onClick={this.calculateFinalResult}
                >
                  Calculate TDEE
                </button>

                {finalResult && (
                  <div className="result-TDEE">
                    Your total metabolism is: {finalResult} calories
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

export default CalculatorBMR;
