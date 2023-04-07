import React from "react";
import logo from "../images/logo.jpg";

class Footer extends React.Component {
  countCalories = () => {
    let calories = 0;
    calories += this.sum(this.props.products.breakfast, "calories");
    calories += this.sum(this.props.products.secondBreakfast, "calories");
    calories += this.sum(this.props.products.dinner, "calories");
    calories += this.sum(this.props.products.supper, "calories");
    return calories;
  };

  countFat = () => {
    let fat = 0;
    fat += this.sum(this.props.products.breakfast, "fat");
    fat += this.sum(this.props.products.secondBreakfast, "fat");
    fat += this.sum(this.props.products.dinner, "fat");
    fat += this.sum(this.props.products.supper, "fat");
    return fat;
  };

  countCarbs = () => {
    let carbs = 0;
    carbs += this.sum(this.props.products.breakfast, "carbs");
    carbs += this.sum(this.props.products.secondBreakfast, "carbs");
    carbs += this.sum(this.props.products.dinner, "carbs");
    carbs += this.sum(this.props.products.supper, "carbs");
    return carbs;
  };

  countProtein = () => {
    let protein = 0;
    protein += this.sum(this.props.products.breakfast, "protein");
    protein += this.sum(this.props.products.secondBreakfast, "protein");
    protein += this.sum(this.props.products.dinner, "protein");
    protein += this.sum(this.props.products.supper, "protein");
    return protein;
  };

  sum = (array, property) => {
    let sum = 0;
    if (array && array.length > 0) {
      for (let i = 0; i < array.length; i += 1) {
        const element = array[i]["nutrition"][property];
        if (element) {
          if (typeof element === "string" || element instanceof String) {
            sum += Number(element.replace("g", " "));
          } else {
            sum += element;
          }
        }
      }
    }
    return sum;
  };

  render() {
    return (
      <>
        <div class="custom-shape-divider-bottom-1680550907">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        {this.props.products ? (
          <div className="footer">
            <span>{"Calories: " + this.countCalories() + " "}</span>
            <span>{"Fat: " + this.countFat() + " "}</span>
            <span>{"Carbs: " + this.countCarbs() + " "}</span>
            <span>{"Protein: " + this.countProtein() + " "}</span>
          </div>
        ) : (
          <div className="secondFooter">
            <div className="headingFooter">
              <span>THE MOST IMPORTANT FOR US IS</span>
              <span>User satisfaction</span>
              <span>The current satisfaction rate with our application is over 100%</span>
              <span>Thank you for using and making our community A Tu Fit</span>
              </div>
            <div className="listFooter">
              <span>WHY A TU FIT?</span>
              <ul>
                <li>
                  <span>EASY TO USE</span>
                </li>
                <li>
                  <span>ACCESSIABLE</span>
                </li>
                <li>
                  <span>CUSTOMIZABLE</span>
                </li>
                <li>
                  <span>FREE TO USE</span>
                </li>
              </ul>
            </div>
            <div className="2listFooter">
              <ul>
                <li> 100+ USERS REGISTERED</li>
                <li> 150+ PRODUCTS AVAILABLE</li>
                <li> 320+ DIARIES CREATES</li>
                <li> 100% SATISFACTION RATE</li>
              </ul>
            </div>
            <div className="logoFooter">
            <img className="logo" src={logo} alt="logo" />
            <span>Copyright © 2023</span>
            <span>All rights reserved.</span>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Footer;
