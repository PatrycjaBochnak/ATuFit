import React from "react";
import NavButtons from "../components/NavButtons";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="logo-text">Logo</div>
        <div className="nav-items">
          <NavButtons source="home-page" linkName="Start" />
          <NavButtons source="calculator-BMR" linkName="Calculator" />
          <NavButtons source="counter" linkName="Calories counter" />{" "}
          <NavButtons source="add-product" linkName="Add product" />
          <NavButtons source="contact" linkName="Contact" />
        </div>
        <div className="login-items">
          <Link className="register-button" to="/register">
            SIGN UP
          </Link>
          <Link className="login-button" to="/login">
            SIGN IN
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
