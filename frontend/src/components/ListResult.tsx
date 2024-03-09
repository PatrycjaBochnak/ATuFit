import React from "react";
import "../styles/ListResult.css";

interface Product {
  title: string;
  // Add other properties as needed
}

interface ListResultProps {
  list: {
    breakfast?: Product[];
    secondBreakfast?: Product[];
    dinner?: Product[];
    supper?: Product[];
  };
}

const ListResult: React.FC<ListResultProps> = (props) => {
  return (
    <>
      <div className="breakfast-results">
        <span>Breakfast</span>
        {props.list &&
        props.list.breakfast &&
        props.list.breakfast.length > 0
          ? props.list.breakfast.map((product, index) => {
              return (
                <ul key={index}>
                  <li>
                    <span>{product.title}</span>
                  </li>
                </ul>
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
          ? props.list.secondBreakfast.map((product, index) => {
              return (
                <ul key={index}>
                  <li>
                    <span>{product.title}</span>
                  </li>
                </ul>
              );
            })
          : ""}
        <hr />
      </div>
      <div className="dinner-results">
        <span>Dinner</span>
        {props.list && props.list.dinner && props.list.dinner.length > 0
          ? props.list.dinner.map((product, index) => {
              return (
                <ul key={index}>
                  <li>
                    <span>{product.title}</span>
                  </li>
                </ul>
              );
            })
          : ""}
        <hr />
      </div>
      <div className="supper-results">
        <span>Supper</span>
        {props.list && props.list.supper && props.list.supper.length > 0
          ? props.list.supper.map((product, index) => {
              return (
                <ul key={index}>
                  <li>
                    <span>{product.title}</span>
                  </li>
                </ul>
              );
            })
          : ""}
        <hr />
      </div>
    </>
  );
}

export default ListResult;
