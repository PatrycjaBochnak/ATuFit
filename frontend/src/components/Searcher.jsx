import React from "react";
import axios from "axios";

class Searcher extends React.Component {
  state = {
    products: "",
    recipes: [],
    recipes2: [],
  };

  onInputChange = (event) => {
    this.setState({ products: event.target.value });
  };

  view = () => {
    axios
      .get("http://localhost:3001/api/getProducts/", {
        params: { name: this.state.products },
      })
      .then((response) => {
        const recipes2 = response.data.products;
        if (recipes2.length === 0) {
          console.log("No data found in the second endpoint");
        } else {
          console.log("Data from the second endpoint:", recipes2);
          this.setState({ recipes2 });
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the second endpoint:", error);
      });

    axios
      .get(
        `https://api.spoonacular.com/food/products/search?query=${this.state.products}&addProductInformation=true&apiKey=6d0d470152d74ee2aa61eaa38e37af8d`
      )
      .then((response) => {
        const recipes1 = response.data.products;
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
      <div className="searcher flex flex-col items-center min-h-screen bg-[#081325] text-gray-300 p-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold inline border-b-4 border-pink-600">
            Search Products
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-400">
            Type products and search it
          </p>
        </div>

        <div className="search-field flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            onChange={this.onInputChange}
            className="bg-[#0A1D37] text-gray-300 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 w-full"
          />
          <button
            className="w-full md:w-auto py-2 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
            type="submit"
            onClick={this.view}
          >
            Click!
          </button>
        </div>

        {allRecipes.length !== 0 && (
          <div
            className="search-results mt-6 w-full max-w-4xl bg-[#0A1D37] p-4 md:p-8 rounded-lg shadow-lg"
            style={{ maxHeight: "70vh", overflowY: "auto" }}
          >
            <div className="cal-macro-names grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 text-center text-sm md:text-base text-gray-300 font-bold">
              <div className="col">Name</div>
              <div className="col">Calories</div>
              <div className="hidden md:block col">Fats</div>
              <div className="hidden md:block col">Carbs</div>
              <div className="hidden md:block col">Proteins</div>
              <div className="col">Add</div>
            </div>
            {allRecipes.map((recipe, index) => (
              <div
                key={index}
                className="row grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 text-center mt-4 items-center"
              >
                <div className="col font-bold text-white text-sm md:text-base">
                  {recipe.title || recipe.name}
                </div>
                <div className="col text-gray-300 text-sm md:text-base">
                  {recipe.nutrition
                    ? recipe.nutrition.calories
                    : recipe.calories}{" "}
                  cal
                </div>
                <div className="hidden md:block col text-gray-300 text-sm md:text-base">
                  {recipe.nutrition && recipe.nutrition.fat
                    ? recipe.nutrition.fat.slice(0, 3)
                    : recipe.fats}{" "}
                  g
                </div>
                <div className="hidden md:block col text-gray-300 text-sm md:text-base">
                  {recipe.nutrition && recipe.nutrition.carbs
                    ? recipe.nutrition.carbs.slice(0, 3)
                    : recipe.carbohydrates}{" "}
                  g
                </div>
                <div className="hidden md:block col text-gray-300 text-sm md:text-base">
                  {recipe.nutrition && recipe.nutrition.protein
                    ? recipe.nutrition.protein.slice(0, 3)
                    : recipe.proteins}{" "}
                  g
                </div>
                <div className="col">
                  <button
                    className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 transition-all duration-300 transform hover:scale-105"
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
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Searcher;