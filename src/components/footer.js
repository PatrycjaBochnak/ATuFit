import React from "react";

class Footer extends React.Component {
  countCalories = () => {
    let calories = 0;
    calories += this.sum(this.props.products.breakfast, 'calories');
    calories += this.sum(this.props.products.secondBreakfast, 'calories');
    calories += this.sum(this.props.products.dinner, 'calories');
    calories += this.sum(this.props.products.supper, 'calories');
    return calories;
  };

  countFat = () => {
    let fat = 0;
    fat += this.sum(this.props.products.breakfast, 'fat');
    fat += this.sum(this.props.products.secondBreakfast, 'fat');
    fat += this.sum(this.props.products.dinner, 'fat');
    fat += this.sum(this.props.products.supper, 'fat');
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
          if (typeof element === 'string' || element instanceof String) {
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
      <div className="footer">
        <span>{"Calories: " + this.countCalories()}</span>
        <span>{"Fat: " + this.countFat()}</span>
        <span>{"Carbs: " + this.countCarbs()}</span>
        <span>{"Protein: " + this.countProtein()}</span>
      </div>
    );
  }
}

export default Footer;
