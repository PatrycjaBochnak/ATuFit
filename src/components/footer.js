import React from "react";

class Footer extends React.Component {
    countFat = () => {
        let fat = 0;
        fat += this.sum(this.props.products.breakfast);
        fat += this.sum(this.props.products.secondBreakfast);
        fat += this.sum(this.props.products.dinner);
        fat += this.sum(this.props.products.supper);
        return fat;
    }

    sum = (array, property) => {
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

    render() {
        return(
            <div className="footer">
                <span>{"Fat: " + this.countFat()}</span>
            </div>
        )
    }
}

export default Footer;
