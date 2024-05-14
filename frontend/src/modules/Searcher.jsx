import React from "react";
import axios from "axios";
import "../styles/Searcher.css";

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
      .all([
        axios.get(
          "https://api.spoonacular.com/food/products/search?query=" +
            this.state.products +
            "&addProductInformation=true&apiKey=6d0d470152d74ee2aa61eaa38e37af8d"
        ),
        axios.get("http://localhost:3001/api/getProducts/", {
          params: {
            product: this.state.product,
          },
        }),
      ])
      .then(
        axios.spread((response1, response2) => {
          let recipes1 = response1.data.products;
          let recipes2 = response2.data.products;

          if (recipes1.length === 0) {
            this.setState({
              recipes: recipes2,
            });
          } else {
            this.setState({
              recipes: recipes1,
              recipes2: recipes2,
            });
          }
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }
  onInputchange(event) {
    this.setState({ products: event.target.value });
  }

  render() {
    return (
      <div className="searcher">
        <div className="search-field">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            onChange={this.onInputchange}
          />
          <button
            className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center"
            type="submit"
            onClick={() => this.view()}
          >
            Click!
          </button>
        </div>
        {this.state.recipes && (
          <div className="search-results">
            <div className="cal-macro-names">
              <div className="col">Name</div>
              <div className="col">Calories</div>
              <div className="col">Fats</div>
              <div className="col">Carbs</div>
              <div className="col">Proteins</div>
              <div className="col">Day part</div>
            </div>
            {Object.keys(this.state.recipes).map((key) => (
              <React.Fragment key={key}>
                <div className="row">
                  <div className="col">{this.state.recipes[key].title}</div>
                  <div className="col">
                    {this.state.recipes[key].nutrition.calories}
                  </div>
                  <div className="col">
                    {this.state.recipes[key].nutrition.fat}
                  </div>
                  <div className="col">
                    {this.state.recipes[key].nutrition.carbs}
                  </div>
                  <div className="col">
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
            ))}
          </div>
        )}
        {this.state.recipes2 && (
          <div className="search-results2">
            <div className="cal-macro-names">
              <div className="col">Name</div>
              <div className="col">Calories</div>
              <div className="col">Fats</div>
              <div className="col">Carbs</div>
              <div className="col">Proteins</div>
              <div className="col">Day part</div>
            </div>
            {Object.keys(this.state.recipes2).map((key) => (
              <React.Fragment key={key}>
                <div className="row">
                  <div className="col">{this.state.recipes[key].name}</div>
                  <div className="col">{this.state.recipes[key].calories}</div>
                  <div className="col">{this.state.recipes[key].fats}</div>
                  <div className="col">
                    {this.state.recipes[key].carbohydrates}
                  </div>
                  <div className="col">{this.state.recipes[key].proteins}</div>
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
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Searcher;
