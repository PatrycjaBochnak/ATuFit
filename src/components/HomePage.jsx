import React from "react";
import "../styles/HomePage.css";
import NavButtons from "../components/NavButtons";

function HomePage() {
  return (
    <>
      <div className="home-page">
        <div className="container-xxl py-5">
          <div className="row g-1 align-items-center">
            <div className="d-flex justify-content-center">
              <div className="col-lg-3">
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-muted fw-normal">
                  ATUFIT
                </h5>
                <h1 className="mb-4">YOUR DAILY ASSISTANT</h1>
                <p className="mb-4">
                  Our team has developed a simple and easy to use diet diary
                  builder. It is powered by a constantly expanding range of new
                  and proven products.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-dark px-3">
                      <h1
                        className="flex-shrink-0 display-5 text-dark mb-0"
                        data-toggle="counter-up"
                      >
                        150+
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0">Products</p>
                        <h6 className="text-uppercase mb-0">Available</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-dark px-3">
                      <h1
                        className="flex-shrink-0 display-5 text-dark mb-0"
                        data-toggle="counter-up"
                      >
                        100%
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0">Rate</p>
                        <h6 className="text-uppercase mb-0">Satistaction</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  className="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center"
                  to="/calculator"
                >
                  {" "}
                  <NavButtons source="calculator-BMR" linkName="Let's start" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
