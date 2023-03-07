import React from "react";
import Searcher from "./searcher";
import CarouselDay from "./carouselDay";

function CaloriesCounter () {

    return ( 
        <>
    <CarouselDay product={this.state.product} /> 
    <Searcher setCurrentProduct={this.setCurrentProduct} />
        </>
)
}

export default CaloriesCounter;