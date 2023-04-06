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
            Register
          </Link>
          <Link className="loginButton" to="/login">
            Sign in
          </Link>
        </div>
        {/* <div class="custom-shape-divider-bottom-1679679246">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div> */}
        <div class="custom-shape-divider-bottom-1680785015">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
      {children}
    </>
  );
}

export default NavBar;
