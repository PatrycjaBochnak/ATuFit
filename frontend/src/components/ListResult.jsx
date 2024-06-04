import React from "react";
import "../styles/ListResult.css";

const ListResult = ({props}) => {
  console.log(props);
  return (
    <>
    <div className="daily-results">
    <h2>Your daily calories result</h2>
      <table>
        <thead>
          
        </thead>
        <tbody className="table-results">
          { props.map( (p) => {
            return(
            <tr style={{display: "flex", gap: '2em'}}>
              <td> { p.name } </td>
              <td> { p.calories } kcal</td>
              <td> { p.carbohydrates } g</td>
              <td> { p.fats } g</td>
              <td> { p.proteins } g</td>
            </tr>
          ) })}

          <tr style={{display: "flex", gap: '2em'}}>
            <td style={{fontWeight: "bold"}}>Total</td>
            <td style={{fontWeight: "bold"}}>{ props.reduce((n, {calories}) => n + calories, 0)} cal</td>
            <td style={{fontWeight: "bold"}}>{ props.reduce((n, {carbohydrates}) => n + carbohydrates, 0)} g</td>
            <td style={{fontWeight: "bold"}}>{ props.reduce((n, {fats}) => n + fats, 0)} g</td>
            <td style={{fontWeight: "bold"}}>{ props.reduce((n, {proteins}) => n + proteins, 0)} g</td>
          </tr>
        </tbody>
      </table>
      </div>
<>
      {/* <table className="meal-table">
        <thead>
          <tr>
            <th>Breakfast</th>
            <th>Second breakfast</th>
            <th>Dinner</th>
            <th>Supper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="breakfast-results">
                {props.list &&
                props.list.breakfast &&
                props.list.breakfast.length > 0 ? (
                  <ul>
                    {props.list.breakfast.map((product, index) => (
                      <li key={index}>{product.title}</li>
                    ))}
                  </ul>
                ) : (
                  <span> - </span>
                )}
              </div>
            </td>
            <td>
              <div className="second-breakfast-results">
                {props.list &&
                props.list.secondBreakfast &&
                props.list.secondBreakfast.length > 0 ? (
                  <ul>
                    {props.list.secondBreakfast.map((product, index) => (
                      <li key={index}>{product.title}</li>
                    ))}
                  </ul>
                ) : (
                  <span> - </span>
                )}
              </div>
            </td>
            <td>
              <div className="dinner-results">
                {props.list && props.list.dinner && props.list.dinner.length > 0 ? (
                  <ul>
                    {props.list.dinner.map((product, index) => (
                      <li key={index}>{product.title}</li>
                    ))}
                  </ul>
                ) : (
                  <span> - </span>
                )}
              </div>
            </td>
            <td>
              <div className="supper-results">
                {props.list && props.list.supper && props.list.supper.length > 0 ? (
                  <ul>
                    {props.list.supper.map((product, index) => (
                      <li key={index}>{product.title}</li>
                    ))}
                  </ul>
                ) : (
                  <span> - </span>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table> */}
</>
    </>
  );
}

export default ListResult;
