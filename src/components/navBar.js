import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom"

function NavBar ({children}) {
    return (<>
        <div className="navBar">
            <img src={logo} alt="logo"/>
            <div className="buttons">
                <Link to="/">HomePage</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div>
            {children}
        </div>
    </>);
}

export default NavBar;

