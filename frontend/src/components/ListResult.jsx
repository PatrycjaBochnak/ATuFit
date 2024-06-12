import React from "react";
import "../styles/ListResult.css";
import Cookies from "js-cookie";

const ListResult = ({ props }) => {
  const calories = Cookies.get("finalResult");
  const protein = Cookies.get("protein");
  const carbohydrates = Cookies.get("carbohydrates");
  const fats = Cookies.get("fats");
  return (
      <div className="daily-results">
        <div className="search-results2">
          <h2>Your daily calories result</h2>
          <div className="table-results">
            <div className="row" style={{ fontWeight: "bold" }}>
              <div className="col" style={{ textAlign: "center"}}>Name</div>
              <div className="col">Calories</div>
              <div className="col">Fats</div>
              <div className="col">Carbs</div>
              <div className="col">Proteins</div>
            </div>
            {props.map((p, index) => (
              <React.Fragment key={index}>
                <div className="row">
                  <div className="col" style={{ fontWeight: "bold"}}>{p.name}</div>
                  <div className="col">{p.calories} cal</div>
                  <div className="col">
                    {parseFloat(p.carbohydrates).toFixed(1)} g
                  </div>
                  <div className="col">{parseFloat(p.fats).toFixed(1)} g</div>
                  <div className="col">
                    {parseFloat(p.proteins).toFixed(1)} g
                  </div>
                </div>
              </React.Fragment>
            ))}
            <div className="total-score">
              <div className="row">
                <div className="col" style={{textAlign: "center"}}>Total</div>
                <div className="col">
                  {props.reduce((n, { calories }) => n + calories, 0)} cal
                </div>
                <div className="col">
                  {props
                    .reduce(
                      (n, { carbohydrates }) => n + parseFloat(carbohydrates),
                      0
                    )
                    .toFixed(1)}{" "}
                  g
                </div>
                <div className="col">
                  {props
                    .reduce((n, { fats }) => n + parseFloat(fats), 0)
                    .toFixed(1)}{" "}
                  g
                </div>
                <div className="col">
                  {props
                    .reduce((n, { proteins }) => n + parseFloat(proteins), 0)
                    .toFixed(1)}{" "}
                  g
                </div>
                <div className="row">Results</div>
                <div className="row">Calories: {calories} cal</div>
                <div className="row">Fats: {fats} g</div>
                <div className="row">Carbs: {carbohydrates} g</div>
                <div className="row" style={{ borderBottom: "none"}}>Proteins: {protein} g</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ListResult;
