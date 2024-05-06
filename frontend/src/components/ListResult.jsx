import React from "react";
import "../styles/ListResult.css";

function ListResult(props) {
  return (
    <>
      <table className="meal-table">
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
      </table>
    </>
  );
}

export default ListResult;
