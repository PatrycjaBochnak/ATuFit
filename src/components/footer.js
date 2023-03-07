import React from "react";

class Footer extends React.Component {

    countCalories = () => {
        let calories = 0;
        calories += this.sum(this.props.products.breakfast);
        calories += this.sum(this.props.products.secondBreakfast);
        calories += this.sum(this.props.products.dinner);
        calories += this.sum(this.props.products.supper);
        return calories;
    }

    countFat = () => {
        let fat = 0;
        fat += this.sum(this.props.products.breakfast);
        fat += this.sum(this.props.products.secondBreakfast);
        fat += this.sum(this.props.products.dinner);
        fat += this.sum(this.props.products.supper);
        return fat;
    }

    countCarbs = () => {
        let carbs = 0;
        carbs += this.sum(this.props.products.breakfast);
        carbs += this.sum(this.props.products.secondBreakfast);
        carbs += this.sum(this.props.products.dinner);
        carbs += this.sum(this.props.products.supper);
        return carbs;
    }

    countProtein = () => {
        let protein = 0;
        protein += this.sum(this.props.products.breakfast);
        protein += this.sum(this.props.products.secondBreakfast);
        protein += this.sum(this.props.products.dinner);
        protein += this.sum(this.props.products.supper);
        return protein;
    }

    sumn = (array, property) => {
        let sum = 0;
        if (array && array.length > 0) {
            for (let i = 0; i < array.length; i += 1) {
                 const element = array[i]["nutrition"]["fat"];
                if (element) {
                    sum += Number(element.replace("g", ""));
                }
            }
        }
        return sum;
    }

    sum = (array, property) => {
        let sum = 0;
        if (array && array.length > 0) {
            for (let i = 0; i < array.length; i += 1) {
                 const element = array[i]["nutrition"]["calories"];
                if (element) {
                    sum += Number(element.replace("g", ""));
                }
            }
        }
        return sum;
    }

    sum = (array, property) => {
        let sum = 0;
        if (array && array.length > 0) {
            for (let i = 0; i < array.length; i += 1) {
                 const element = array[i]["nutrition"]["carbs"];
                if (element) {
                    sum += Number(element.replace("g", ""));
                }
            }
        }
        return sum;
    }

    sum = (array, property) => {
        let sum = 0;
        if (array && array.length > 0) {
            for (let i = 0; i < array.length; i += 1) {
                 const element = array[i]["nutrition"]["protein"];
                if (element) {
                    sum += Number(element.replace("g", ""));
                }
            }
        }
        return sum;
    }

    render() {
        return(
            <div className="footer">
                <span>{"Calories: " + this.countCalories()}</span>
                <span>{"Fat: " + this.countFat()}</span>
                <span>{"Carbs: " + this.countCarbs()}</span>
                <span>{"Protein: " + this.countProtein()}</span>
            </div>
        )
    }
}

export default Footer;
