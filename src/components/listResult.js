import React from "react";

function ListResult(props) {
  return (
    <>
      <div className="breakfastResults">
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
        <hr className="separator" />
      </div>
      <div className="secondBreakfastResults">
        <span>Second Breakfast</span>
        {props.list &&
        props.list.secondBreakfast &&
        props.list.secondBreakfast.length > 0
          ? props.list.secondBreakfast.map((product) => {
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
        <hr className="separator" />
      </div>
      <div className="dinnerResults">
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
        <hr className="separator" />
      </div>
      <div className="supperResults">
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
        <hr className="separator" />
      </div>
    </>
  );
}

export default ListResult;
