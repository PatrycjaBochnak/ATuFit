import React, { Component } from "react";
import Footer from "./footer";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

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
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };
  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };
  handleHeightChange = (event) => {
    this.setState({ height: event.target.value });
  };
  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleActivityChange = (event) => {
    this.setState({ activity: event.target.value });
  };
  handleSystemChange = (event) => {
    this.setState({ system: event.target.value });
  };

  calculateBMR() {
    let age = this.state.age;
    let weight = this.state.weight;
    let height = this.state.height;
    let gender = this.state.gender;

    if (this.state.system == 1) {
      if (age == "" || weight == "" || gender == "" || height == "") {
        this.setState({ error: "All fields are required" });
        return;
      }
    } else if (this.state.system == 2) {
      if (age == "" || weight == "" || gender == "" || height == "") {
        this.setState({ error: "All fields are required" });
        return;
      }
    }

    let bmrCalc = "";
    {
      if (gender == 1) {
        //Female
        bmrCalc = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
      } else if (gender == 2) {
        //Male
        bmrCalc = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
      }
    }

    this.setState({ bmr: bmrCalc });
    this.setState({ flag: true });
    this.setState({ error: "" });
  }

  calculateFinalResult() {
    let ActCalc;

    if (this.state.activity == "1.2") {
      ActCalc = this.state.bmr * 1.2;
    } else if (this.state.activity == "1.375") {
      ActCalc = this.state.bmr * 1.375;
    } else if (this.state.activity == "1.55") {
      ActCalc = this.state.bmr * 1.55;
    } else if (this.state.activity == "1.725") {
      ActCalc = this.state.bmr * 1.725;
    } else if (this.state.activity == "1.9") {
      ActCalc = this.state.bmr * 1.9;
    }
    this.setState({ finalResult: ActCalc });
    this.ActCalc = ActCalc;
    console.log(ActCalc);
    this.setCookie();
  }

  setCookie = () => {
    Cookies.set("finalResult", this.ActCalc, { expires: 7 });
  };

  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error} </div>;
    }
    let result;
    if (this.state.bmr) {
      result = (
        <div className="resultBMR">
          Your basic metabolism is: {this.state.bmr} calories
        </div>
      );
    }

    let resultAct;
    if (this.state.bmr) {
      resultAct = (
        <div className="resultTDEE">
          Your total metabolism is {this.state.finalResult} calories
        </div>
      );
    }

    let a = this.state.flag === true ? true : false;

    let b = true;
    if (this.state.system == 2) {
      let b = false;
    }
    return (
      <>
        <div className="calculatorBMR">
          <div className="calculatorText">
            <span>
              Insert your details to check Your BMR and Total Metabolism
            </span>
          </div>
          <div id="bmrcalc">
            <div className="form">
              {error}
              <div className="inputGender">
                <label className="label">Gender</label>
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
              </div>
              <div className="inputWeight">
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
              <div className="inputHeight">
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
              <div className="inputAge">
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
                className="buttonBMR"
                onClick={() => this.calculateBMR()}
              >
                Calculate BMR
              </button>
              {result}

              {a == true && (
                <div className="workout">
                  <div className="inputWorkout">
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
                    type="button"
                    className="buttonTDEE"
                    onClick={() => this.calculateFinalResult()}
                  >
                    Calculate TDEE
                  </button>
                  {resultAct}
                </div>
              )}
              <Link
                class="btn btn-primary py-3 px-5 mt-2"
                to="/caloriesCounter"
              >
                Click here to check your calories
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default CalculatorBMR;
