import React from "react";

function ListResult(props) {
    return (
        <div className="results">
                <div className="results"><span>Breakfast</span>{props.list.breakfast && props.list.breakfast.length > 0 ? props.list.breakfast.map(product => {
                        return (
                            <>
                            <ul>
                                <li><span>{product.title}</span></li>
                            </ul>
                            </>
                        )
                    }) : ''}
                </div>
                <div className="results"><span>Second Breakfast</span>{props.list.secondBreakfast && props.list.secondBreakfast.length > 0 ? props.list.secondBreakfast.map(product => {
                    return (
                        <>
                        <ul>
                            <li><span>{product.title}</span></li>
                        </ul>
                        </>
                    )
                }) : ''}
                </div>
                <div className="results"><span>Dinner</span>{props.list.dinner && props.list.dinner.length > 0 ? props.list.dinner.map(product => {
                    return (
                        <>
                        <ul>
                            <li><span>{product.title}</span></li>
                        </ul>
                        </>
                    )
                }) : ''}
                </div>
                <div className="results"><span>Supper</span>{props.list.supper && props.list.supper.length > 0 ? props.list.supper.map(product => {
                    return (
                        <>
                        <ul>
                            <li><span>{product.title}</span></li>
                        </ul>
                        </>
                    )
                }) : ''}
                </div>
        </div>
    );
}

export default ListResult;