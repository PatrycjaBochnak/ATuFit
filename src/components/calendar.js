import ListResult from "./listResult";
import React from "react";
import Footer from "./footer";
import Calendar from "react-calendar";

class CarouselDay extends React.Component {
  state = {
    calendarValue: new Date()
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
        console.log(this.state[this.state.calendarValue])
      if (!this.state[this.state.calendarValue]) {
        this.setState ({...this.state,[this.state.calendarValue] : { 
        breakfast: [],
        secondBreakfast: [],
        dinner: [],
        supper: [],
        }}, () => this.updateProducts());
      } else { 
        this.updateProducts();
      }
    }
  }
  updateProducts() {
    console.log(this.props.product);  console.log(this.state);
      console.log(this.props.product.partOfDay);
      const productsOfPartOfDay = this.state[this.state.calendarValue][this.props.product.partOfDay];
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
    this.setState ( { 
      ...this.state, calendarValue: value.toLocaleDateString
    })
  }

  render() { 
    return (
      <>
           <div className="calendarCalories">
          <Calendar className="calendar" onChange={this.calendarValueOnChange} value={this.state.calendarValue} />
            <h3 className="calendarDay">Day: {this.state.calendarValue.toLocaleDateString()}</h3>
            <hr className="separator" />
            <ListResult list={this.state[this.state.calendarValue.toLocaleDateString()]} />
          </div>
        <Footer products={this.state[this.state.calendarValue.toLocaleDateString()]} />
      </>
    );
  }
}

export default CarouselDay;