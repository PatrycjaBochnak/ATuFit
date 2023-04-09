import React from "react";
import Footer from "./footer";
import salad1 from "../images/salad1.jpg";
import vegetables from "../images/vegetables.jpg";

function HomePage() {
  return (
    <>
      <div className="homePage">
        <div className="firstSlide">
        <img className="salad1" src={salad1} alt="salad1" />
          <div className="heading1">
            <span>YOUR DAILY ASSISTANT</span>
          </div>
          <div className="heading2">
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.//A step-by-step guide through the process of creating a diet. Know
              your daily calorie and macronutrient needs and then in the count
              calories tab, add the products you consumed during the day and
              compare the result to your needs
            </span>
          </div>
        </div>
        <div className="secondSlide">
          <img className="vegetables" src={vegetables} alt="vegetables" />
          <div className="heading3">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
