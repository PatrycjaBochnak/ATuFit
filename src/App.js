import React from 'react';
import './App.scss';
import HomePage from './components/homePage';
import NavBar from './components/navBar';
import Contact from "./components/contact";
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
                <Route element={ <Layout /> } >
                    <Route path="/" element={ < HomePage /> } />
                    <Route path="/contact" element={ < Contact /> } />
                    <Route path="*" element={<div><h1>ERROR 404</h1><h2>Taka strona nie istnieje</h2> </div> } /> 
                </Route>
            </Routes>
        );
    }
}

export default App;