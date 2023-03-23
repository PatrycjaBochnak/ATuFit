import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"
   
function NavBar({ children }) {
  return (
    <>
      <div className="navBar">
        <img className="logo" src={logo} alt="logo" width="100" height="100"/>
        <div className="buttons">
          <Link to="/">HomePage</Link>
          <Link to="/caloriesCounter">Calories Counter</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="firstWave"/>
      </div>
      <div>{children}</div>
    </>
  );
}

export default NavBar;
