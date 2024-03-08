import React, { ChangeEvent } from "react";
import Cookies from "js-cookie";
import "../styles/CalculatorBMR.css";

interface CalculatorBMRState {
  gender: string;
  weight: string;
  age: string;
  height: string;
  activity: string;
  bmr: string;
  error: string;
  flag: boolean;
  system: string;
  finalResult: string;
}

class CalculatorBMR extends React.Component<{}, CalculatorBMRState> {
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

  handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ age: event.target.value });
  };

  handleWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ weight: event.target.value });
  };

  handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ height: event.target.value });
  };

  handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: event.target.value });
  };

  handleActivityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ activity: event.target.value });
  };

  handleSystemChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ system: event.target.value });
  };

  calculateBMR() {
    let age = this.state.age;
    let weight = this.state.weight;
    let height = this.state.height;
    let gender = this.state.gender;

    if (this.state.system === "1" || this.state.system === "2") {
      if (age === "" || weight === "" || gender === "" || height === "") {
        this.setState({ error: "All fields are required" });
        return;
      }
    }

    let bmrCalc = "";
    if (gender === "1") {
      // Female
      bmrCalc = (655 + 9.563 * parseFloat(weight) + 1.85 * parseFloat(height) - 4.676 * parseFloat(age)).toString();
    } else if (gender === "2") {
      // Male
      bmrCalc = (66.5 + 13.75 * parseFloat(weight) + 5.003 * parseFloat(height) - 6.755 * parseFloat(age)).toString();
    }

    this.setState({ bmr: bmrCalc });
    this.setState({ flag: true });
    this.setState({ error: "" });
  }

  calculateFinalResult() {
    let ActCalc = 0;

    if (this.state.activity === "1.2") {
      ActCalc = parseFloat(this.state.bmr) * 1.2;
    } else if (this.state.activity === "1.375") {
      ActCalc = parseFloat(this.state.bmr) * 1.375;
    } else if (this.state.activity === "1.55") {
      ActCalc = parseFloat(this.state.bmr) * 1.55;
    } else if (this.state.activity === "1.725") {
      ActCalc = parseFloat(this.state.bmr) * 1.725;
    } else if (this.state.activity === "1.9") {
      ActCalc = parseFloat(this.state.bmr) * 1.9;
    }

    this.setState({ finalResult: ActCalc.toString() });
    this.setCookie();
  }

  setCookie = () => {
    Cookies.set("finalResult", this.state.finalResult, { expires: 7 });
  };

  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error} </div>;
    }

    const finalResultBMR = parseFloat(this.state.bmr);
    const fixedResultBMR = finalResultBMR.toFixed(0);

    let result;
    if (this.state.bmr) {
      result = (
        <div className="result-BMR">
          Your basic metabolism is: {fixedResultBMR} calories
        </div>
      );
    }

    const finalResultNumber = parseFloat(this.state.finalResult);
    const fixedResultNumber = finalResultNumber.toFixed(0);

    let resultAct;
    if (this.state.bmr && this.state.flag === true) {
      resultAct = (
        <div className="result-TDEE">
          Your total metabolism is: {fixedResultNumber} calories
        </div>
      );
    }

    let a = this.state.flag === true ? true : false;

    let b = true;
    if (this.state.system === "2") {
      b = false;
    }

    return (
      <>
        <div className="calculator-BMR">
          <h1 className="d-flex justify-content-center col-md-4 mb-4 fs-3">
            Firstly, insert your details to check Your BMR and Total
            Metabolism
          </h1>
          <div id="bmrcalc">
            <div className="form">
              {error}
              <label className="input-gender">Gender</label>
              <label>
                <input
                  type="radio"
                  checked={this.state.gender === "1"}
                  onChange={this.handleGenderChange}
                  className="genderF"
                  name="gender"
                  value="1"
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  checked={this.state.gender === "2"}
                  onChange={this.handleGenderChange}
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
                  value={this.state.weight}
                  onChange={this.handleWeightChange}
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
                  value={this.state.height}
                  onChange={this.handleHeightChange}
                  name="height"
                  className="height"
                  min="0"
                  max="8"
                />
              </div>
              <div className="input-age">
                <label className="label">Age</label>
                <input
                  type="number"
                  value={this.state.age}
                  onChange={this.handleAgeChange}
                  className="age"
                  name="age"
                  min="0"
                  max="120"
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center buttonBMR"
                onClick={() => this.calculateBMR()}
              >
                Calculate BMR
              </button>

              {result}

              {a && (
                <div className="workout">
                  <div className="input-workout">
                    <label className="label">Workout in a Week</label>
                    <select
                      className="activity"
                      value={this.state.activity}
                      onChange={this.handleActivityChange}
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
                    className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center"
                    onClick={() => this.calculateFinalResult()}
                  >
                    Calculate TDEE
                  </button>

                  {resultAct}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CalculatorBMR;
