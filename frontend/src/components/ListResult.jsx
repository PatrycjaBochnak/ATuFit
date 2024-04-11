import React from "react";
import "../styles/ListResult.css";

function ListResult(props) {
  return (
    <>
      <div className="breakfast-results">
        <span>Breakfast</span>
        {props.list && props.list.breakfast && props.list.breakfast.length > 0
          ? props.list.breakfast.map((product) => {
              return (
                <>
                  <ul>
                    <li>
                      <span>{product.title}</span>
                    </li>
                  </ul>
                </>
              );
            })
          : ""}
        <hr />
      </div>
      <div className="second-breakfast-results">
        <span>Second Breakfast</span>
        {props.list &&
        props.list.secondBreakfast &&
        props.list.secondBreakfast.length > 0
          ? props.list.secondBreakfast.map((product) => {
              console.log(props.list.secondBreakfast);
              return (
                <>
                  <ul>
                    <li>
                      <span>{product.title}</span>
                    </li>
                  </ul>
                </>
              );
            })
          : "12312"}
        <hr />
      </div>
      <div className="dinner-results">
        <span>Dinner</span>
        {props.list && props.list.dinner && props.list.dinner.length > 0
          ? props.list.dinner.map((product) => {
              return (
                <>
                  <ul>
                    <li>
                      <span>{product.title}</span>
                    </li>
                  </ul>
                </>
              );
            })
          : ""}
        <hr />
      </div>
      <div className="supper-results">
        <span>Supper</span>
        {props.list && props.list.supper && props.list.supper.length > 0
          ? props.list.supper.map((product) => {
              return (
                <>
                  <ul>
                    <li>
                      <span>{product.title}</span>
                    </li>
                  </ul>
                </>
              );
            })
          : ""}
        <hr />
      </div>
    </>
  );
}

export default ListResult;
