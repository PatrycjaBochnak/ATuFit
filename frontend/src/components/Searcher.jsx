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
        params: { name: this.state.products },
      })
      .then((response2) => {
        let recipes2 = response2.data.products;
        if (recipes2.length === 0) {
          console.log("No data found in the second endpoint");
        } else {
          console.log("Data from the second endpoint:", recipes2);
          this.setState({ recipes2: recipes2 });
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the second endpoint:", error);
      });

    axios
      .get(
        `https://api.spoonacular.com/food/products/search?query=${this.state.products}&addProductInformation=true&apiKey=6d0d470152d74ee2aa61eaa38e37af8d`
      )
      .then((response1) => {
        let recipes1 = response1.data.products;
        if (recipes1.length === 0) {
          console.log("No data found in the first endpoint");
        } else {
          console.log("Data from the first endpoint:", recipes1);
          this.setState({ recipes: recipes1 });
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the first endpoint:", error);
      });
  };

  render() {
    const { recipes, recipes2 } = this.state;
    const allRecipes = [...recipes, ...recipes2];

    return (
      <div className="counter">
        <h2>Type products and search it</h2>
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
              onClick={this.view}
            >
              Click!
            </button>
          </div>
          {allRecipes.length !== 0 && (
            <div className="search-results">
              <div className="cal-macro-names">
                <div className="col">Name</div>
                <div className="col">Calories</div>
                <div className="col">Fats</div>
                <div className="col">Carbs</div>
                <div className="col">Proteins</div>
                <div className="col">Add</div>
              </div>
              {allRecipes.map((recipe, index) => (
                <React.Fragment key={index}>
                  <div className="row">
                    <div
                      className="col"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {recipe.title || recipe.name}
                    </div>
                    <div className="col">
                      {recipe.nutrition
                        ? recipe.nutrition.calories
                        : recipe.calories}{" "}
                      cal
                    </div>
                    <div className="col">
                      {recipe.nutrition
                        ? recipe.nutrition.fat.slice(0, 3)
                        : recipe.fats}{" "}
                      g
                    </div>
                    <div className="col">
                      {recipe.nutrition
                        ? recipe.nutrition.carbs.slice(0, 3)
                        : recipe.carbohydrates}{" "}
                      g
                    </div>
                    <div className="col">
                      {recipe.nutrition
                        ? recipe.nutrition.protein.slice(0, 3)
                        : recipe.proteins}{" "}
                      g
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-outline-success btn-add"
                        onClick={() => {
                          this.props.setCurrentProduct({
                            name: recipe.title || recipe.name,
                            calories: recipe.nutrition
                              ? recipe.nutrition.calories
                              : recipe.calories,
                            fats: recipe.nutrition
                              ? recipe.nutrition.fat
                              : recipe.fats,
                            carbohydrates: recipe.nutrition
                              ? recipe.nutrition.carbs
                              : recipe.carbohydrates,
                            proteins: recipe.nutrition
                              ? recipe.nutrition.protein
                              : recipe.proteins,
                          });
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Searcher;
