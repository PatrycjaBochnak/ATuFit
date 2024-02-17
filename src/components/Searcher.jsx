import React from "react";
import axios from "axios";

class Searcher extends React.Component {
  state = {};
  constructor() {
    super();
    this.state = {
      products: "",
    };
    this.onInputchange = this.onInputchange.bind(this);
  }

  view() {
    axios
      .get(
        "https://api.spoonacular.com/food/products/search?query=" +
          this.state.products +
          "&addProductInformation=true&apiKey=6d0d470152d74ee2aa61eaa38e37af8d"
      )
      .then((response) => {
        this.setState({
          recipes: response.data.products,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onInputchange(event) {
    this.setState({ products: event.target.value });
  }

  render() {
    return (
      <div className={"searcher"}>
        <div className={"searchField"}>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            onChange={this.onInputchange}
          />
          <button className="clicker" type="submit" onClick={() => this.view()}>
            Click!<i className="fa fa-search"></i>
          </button>
        </div>
        {this.state.recipes ? (
          <div className="searchResults">
            <div className="calMacroNames">
              <div className="col-md-6">Name</div>
              <div className="col-md-1">Calories</div>
              <div className="col-md-1">Fats</div>
              <div className="col-md-1">Carbs</div>
              <div className="col-md-1">Proteins</div>
            </div>

            {Object.keys(this.state.recipes).map((key) => {
              return (
                <React.Fragment key={key}>
                  <div className="row">
                    <hr className="separator" />
                    <div className="col-md-6">
                      {this.state.recipes[key].title}
                    </div>
                    <div className="col-md-1">
                      {this.state.recipes[key].nutrition.calories}
                    </div>
                    <div className="col-md-1">
                      {this.state.recipes[key].nutrition.fat}
                    </div>
                    <div className="col-md-1">
                      {this.state.recipes[key].nutrition.carbs}
                    </div>
                    <div className="col-md-1">
                      {this.state.recipes[key].nutrition.protein}
                    </div>
                    <div className="col-md-2">
                      <select
                        name="day"
                        onChange={(e) => {
                          console.log(e.target);
                          this.props.setCurrentProduct({
                            title: this.state.recipes[key].title,
                            nutrition: this.state.recipes[key].nutrition,
                            partOfDay: e.target.value,
                          });
                        }}
                        style={{ width: "90%" }}
                      >
                        <option value={"choose part of day"}>Choose</option>
                        <option value={"breakfast"}>Breakfast</option>
                        <option value={"secondBreakfast"}>
                          Second Breakfast
                        </option>
                        <option value={"dinner"}>Dinner</option>
                        <option value={"supper"}>Supper</option>
                      </select>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Searcher;