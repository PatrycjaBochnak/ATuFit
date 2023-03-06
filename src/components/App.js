import React from 'react';
import './App.scss';
import Searcher from "./searcher";
import CarouselDay from "./carouselDay";
import HomePage from "./homePage";
import Contact from "./contact";
import NavBar from "./navBar";
import {
    Routes, Route, Outlet
} from "react-router-dom";

const Layout = () => {
    return <NavBar><Outlet /></NavBar>
}

class App extends React.Component {
    state = {
    product: ''
    };

    setCurrentProduct = (product) => {
    this.setState({product: product});
    };

    render() {
        return (
            <Routes>
                <Route element={ <Layout /> } />
                <Route path="/main" element={<><div className="appContainer"/> <Searcher setCurrentProduct={this.setCurrentProduct} /> </> } />
                <CarouselDay product={this.state.product} />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="*" element={<div><h1>ERROR 404</h1><h2>Taka strona nie istnieje</h2> </div> } /> 
            </Routes>
        );
    }
}

export default App;