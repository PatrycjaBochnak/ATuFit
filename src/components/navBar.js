import React from "react";
import { Link } from "react-router-dom";
import broccoli from "../images/broccoli.jpg";
import { AiFillHome } from 'react-icons/ai';
import { FaCalculator } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { GiAppleCore } from 'react-icons/gi';

function NavBar({ children }) {
  return (
    <>
      <div className="navBar">
        <img className="broccoli" src={broccoli} alt="broccoli" />
        <span className="companyName">ATUFIT</span>
        <div className="buttons">
          <AiFillHome/><Link className="link" to="/">
            HOME
          </Link>
          <GiAppleCore/><Link className="link" to="/caloriesCounter">
            CALORIES COUNTER
          </Link>
          <FaCalculator/><Link className="link" to="/calculator">
            CALCULATOR
          </Link>
          <FaPhoneAlt/><Link className="link" to="/contact">
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
