import ListResult from "./ListResult";
import React from "react";
import Calendar from "react-calendar"

import "../styles/Calendar.css";

class CarouselDay extends React.Component {
  state = {
    calendarValue: new Date(),
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (!this.state[this.state.calendarValue]) {
        this.setState(
          {
            ...this.state,
            [this.state.calendarValue]: {
              breakfast: [],
              secondBreakfast: [],
              dinner: [],
              supper: [],
            },
          },
          () => this.updateProducts()
        );
      } else {
        this.updateProducts();
      }
    }
  }
  updateProducts() {
    console.log(this.props.product);
    console.log(this.state);
    console.log(this.props.product.partOfDay);
    // const productsOfPartOfDay =
    //   this.state[this.state.calendarValue][this.props.product.partOfDay];

    const productsOfPartOfDay = [];
    productsOfPartOfDay.push(this.props.product);
    this.setState({
      ...this.state,
      [this.state.calendarValue]: {
        ...this.state[this.state.calendarValue],
        [this.props.product.partOfDay]: productsOfPartOfDay,
      },
    });
    console.log(this.state);
  }
  calendarValueOnChange = (value) => {
    this.setState({
      ...this.state,
      calendarValue: value.toLocaleDateString,
    });
  };

  render() {
    return (
      <>
        <div className="calendar-calories">
          <Calendar
            className="calendar"
            onChange={this.calendarValueOnChange}
            value={this.state.calendarValue}
          />
          <h3 className="calendar-day">
            Day: {this.state.calendarValue.toLocaleDateString()}
          </h3>
          <hr />
          <ListResult list={this.state[this.state.calendarValue]} />
        </div>
      </>
    );
  }
}

export default CarouselDay;
