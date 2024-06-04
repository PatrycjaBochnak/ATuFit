import React from "react";
import axios from "axios";
import "../styles/Searcher.css";

class Searcher extends React.Component {
  state = {
    products: "",
    recipes: [],
    recipes2: [],
  };

  onInputchange = (event) => {
    this.setState({ products: event.target.value });
  };

  view = () => {
    axios
          .get("http://localhost:3001/api/getProducts/", {
            params: {
              name: this.state.products,
            },
          })
          .then((response2) => {
            let recipes2 = response2.data.products;

            if (recipes2.length === 0) {
              console.log("No data found in the second endpoint");
            } else {
              console.log("Data from the second endpoint:", recipes2);
              this.setState({
                recipes2: recipes2,
              });
            }
          })
          .catch((error) => {
            console.error(
              "Error fetching data from the second endpoint:",
              error
            );
          });

    axios
      .get(
        "https://api.spoonacular.com/food/products/search?query=" +
          this.state.products +
          "&addProductInformation=true&apiKey=6d0d470152d74ee2aa61eaa38e37af8d"
      )
      .then((response1) => {
        let recipes1 = response1.data.products;
        if (recipes1.length === 0) {
          console.log("No data found in the first endpoint");
        } else {
          console.log("Data from the first endpoint:", recipes1);
          this.setState({
            recipes: recipes1,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the first endpoint:", error);
      });
  };

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
        {this.state.recipes != 0 && (
          <div className="search-results">
            <div className="cal-macro-names">
              <div className="col">Name</div>
              <div className="col">Calories</div>
              <div className="col">Fats</div>
              <div className="col">Carbs</div>
              <div className="col">Proteins</div>
              <div className="col">Day part</div>
            </div>
            {this.state.recipes.map((recipe, index) => (
              <React.Fragment key={index}>
                <div className="row">
                  <div className="col">{recipe.title}</div>
                  <div className="col">{recipe.nutrition.calories}</div>
                  <div className="col">{recipe.nutrition.fat ? (recipe.nutrition.fat).slice(0, 4) : ""}</div>
                  <div className="col">{recipe.nutrition.carbs ? (recipe.nutrition.carbs).slice(0, 4) : ""} g</div>
                  <div className="col">{recipe.nutrition.protein ? (recipe.nutrition.protein).slice(0, 4) : ""}</div>
                  <div className="col-md-2">
                  <button onClick={()=>{
                         this.props.setCurrentProduct({
                          name: recipe.name,
                          calories: recipe.calories,
                          fats: recipe.fats,
                          carbohydrates: recipe.carbohydrates,
                          proteins: recipe.proteins
                        });
                      }}>Add</button>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
        {this.state.recipes2 != 0 && (
          <div className="search-results2">
            <div className="cal-macro-names">
              <div className="col">Name</div>
              <div className="col">Calories</div>
              <div className="col">Fats</div>
              <div className="col">Carbs</div>
              <div className="col">Proteins</div>
              <div className="col">Day part</div>
            </div>
            {this.state.recipes2.map((recipe, index) => (
              <React.Fragment key={index}>
                <div className="row">
                  <div className="col">{recipe.name}</div>
                  <div className="col">{recipe.calories}</div>
                  <div className="col">{recipe.fats}</div>
                  <div className="col">{recipe.carbohydrates}</div>
                  <div className="col">{recipe.proteins}</div>
                  <div className="col-md-2">
                      <button onClick={()=>{
                         this.props.setCurrentProduct({
                          name: recipe.name,
                          calories: recipe.calories,
                          fats: recipe.fats,
                          carbohydrates: recipe.carbohydrates,
                          proteins: recipe.proteins
                        });
                      }}>Add</button>
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
