import React from "react";
import Searcher from "./searcher";
// import CarouselDay from "./carouselDay";
import { useState } from 'react';



function CaloriesCounter () {
    const [state, setState] = useState(null)
    const dataFromApi = (data) => {
        setState(data);
        }
    return ( 
        <>
    <Searcher props={dataFromApi} />
    {/* <CarouselDay product={this.state.product} />  */}
        </>
)
}

export default CaloriesCounter;