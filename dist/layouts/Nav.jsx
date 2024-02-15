import React from "react";
import { Link } from "react-router-dom";
import broccoli from "../images/broccoli.jpg";

function NavBar({ children }) {
  return (
    <>
      <div className="navBar">
        <img className="broccoli" src={broccoli} alt="broccoli" />
        <span className="companyName">ATUFIT</span>
        <div className="buttons">
          <Link className="link" to="/">
            HOME
          </Link>
          <Link className="link" to="/caloriesCounter">
            CALORIES COUNTER
          </Link>
          <Link className="link" to="/calculator">
            CALCULATOR
          </Link>
          <Link className="link" to="/contact">
            CONTACT
          </Link>
        </div>
        <div className="loginButtons">
          <Link className="registerButton" to="/register">
            SIGN UP
          </Link>
          <Link className="loginButton" to="/login">
            SIGN IN
          </Link>
        </div>
      </div>
      {children}
    </>
  );
}

export default NavBar;
