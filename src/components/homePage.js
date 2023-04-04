import React from "react";
import Footer from "./footer";

function HomePage() {
  return (
    <>
    <div className="homePage">
        <div className="heading1">
            <span>Welcome to A Tu Fit website</span>
          <div className="heading2">
            <span>
              A step-by-step guide through the process of creating your diet.
              Our team has developed a simple and easy to use diet diary
              builder. It is powered by a constantly expanding range of new and
              proven products.
            </span>
          </div>
        </div>
      </div>
      <Footer />
      </>
  );
}

export default HomePage;