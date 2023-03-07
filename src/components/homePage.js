import React from "react";
import Searcher from "./searcher";
import CarouselDay from "./carouselDay";



function HomePage () {

    return ( 
        <>
    <CarouselDay product={this.state.product} /> 
    <Searcher setCurrentProduct={this.setCurrentProduct} />
        </>
)
}

export default HomePage;