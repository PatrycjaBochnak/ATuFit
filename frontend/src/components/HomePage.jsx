import React from "react";
import "../styles/HomePage.css";
import NavButtons from "./NavButtons";

function HomePage() {
  return (
    <div className="home-page">
      <div className="welcome">
        <h5>ATUFIT</h5>
        <h1>YOUR DAILY ASSISTANT</h1>
        <p>
          Our team has developed a simple and easy-to-use diet diary builder. It
          is powered by a constantly expanding range of new and proven products.
        </p>
      </div>
      <div className="welcome-opinions">
        <div className="first-op">
          <h2>150+</h2>
          <p>Products</p>
          <h6>Available</h6>
        </div>
        <div className="second-op">
          <h2>100%</h2>
          <p>Rate</p>
          <h6>Satisfaction</h6>
        </div>
      </div>
      <button className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center">
          <NavButtons source="calculator-BMR" linkName="Let's start" />
      </button>
    </div>
  );
}

export default HomePage;
