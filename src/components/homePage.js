import React from "react";
import Footer from "./footer";
import salad1 from "../images/salad1.jpg"
import vegetables from "../images/vegetables.jpg"

function HomePage() {
  return (
    <>
    <div className="homePage">
            <div className="homePageIcon1">
            <img className="salad1" src={salad1} alt="salad1" />
            </div>
            <div className="heading1">
            <span>YOUR DAILY ASSISTANT</span>
          <div className="heading2">
            <span>
            A step-by-step guide through the process of creating a diet. Know your daily calorie and macronutrient needs and then in the count calories tab, add the products you consumed during the day and compare the result to your needs
            </span>
            <div className="heading3">
              <span>Text text text</span>
            </div>
            <div className="homePageIcon2">
            <img className="vegetables" src={vegetables} alt="vegetables" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
  );
}

export default HomePage;