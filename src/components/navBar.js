import React from "react";
import { Link } from "react-router-dom"

function NavBar ({children}) {
    return (<>
        <div className="navBar">
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

