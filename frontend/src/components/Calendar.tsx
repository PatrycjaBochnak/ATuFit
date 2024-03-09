import ListResult from "./ListResult";
import React, { Component } from "react";
import Calendar from "react-calendar";
import "../styles/Calendar.css";

interface Product {
  partOfDay: string;
}

interface CarouselDayProps {
  product: Product;
}

interface CarouselDayState {
  calendarValue: Date;
  [key: string]: {
    breakfast: Product[];
    secondBreakfast: Product[];
    dinner: Product[];
    supper: Product[];
  };
}

class CarouselDay extends Component<CarouselDayProps, CarouselDayState> {
  state: CarouselDayState = {
    calendarValue: new Date(),
  };

  componentDidUpdate(prevProps: CarouselDayProps) {
    if (prevProps.product !== this.props.product) {
      if (!this.state[this.state.calendarValue.toLocaleDateString()]) {
        this.setState(
          {
            ...this.state,
            [this.state.calendarValue.toLocaleDateString()]: {
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
    const productsOfPartOfDay =
      this.state[this.state.calendarValue.toLocaleDateString()][
        this.props.product.partOfDay
      ];
    productsOfPartOfDay.push(this.props.product);
    this.setState({
      ...this.state,
      [this.state.calendarValue.toLocaleDateString()]: {
        ...this.state[this.state.calendarValue.toLocaleDateString()],
        [this.props.product.partOfDay]: productsOfPartOfDay,
      },
    });
    console.log(this.state);
  }

  calendarValueOnChange = (value: Date) => {
    this.setState({
      ...this.state,
      calendarValue: value,
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
          <ListResult list={this.state[this.state.calendarValue.toLocaleDateString()]} />
        </div>
      </>
    );
  }
}

export default CarouselDay;
