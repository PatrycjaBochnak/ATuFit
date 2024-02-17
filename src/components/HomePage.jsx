import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="home-page">
        <div class="container-xxl py-5">
          <div class="row g-1 align-items-center">
            <div class="d-flex justify-content-center">
              <div class="col-lg-3">
                <div class="row g-6">
                  <div class="col-3 text-start"></div>
                  <div class="col-3 text-end salad1 rounded w-25"></div>
                </div>
              </div>
              <div class="col-lg-6">
                <h5 class="section-title ff-secondary text-start text-muted fw-normal">
                  ATUFIT
                </h5>
                <h1 class="mb-4">
                  YOUR DAILY<i class="fa fa-utensils text-primary me-2"></i>
                  ASSISTANT
                </h1>
                <p class="mb-4">
                  Our team has developed a simple and easy to use diet diary
                  builder. It is powered by a constantly expanding range of new
                  and proven products.
                </p>
                <div class="row g-4 mb-4">
                  <div class="col-sm-6">
                    <div class="d-flex align-items-center border-start border-5 border-dark px-3">
                      <h1
                        class="flex-shrink-0 display-5 text-dark mb-0"
                        data-toggle="counter-up"
                      >
                        150+
                      </h1>
                      <div class="ps-4">
                        <p class="mb-0">Products</p>
                        <h6 class="text-uppercase mb-0">Available</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="d-flex align-items-center border-start border-5 border-dark px-3">
                      <h1
                        class="flex-shrink-0 display-5 text-dark mb-0"
                        data-toggle="counter-up"
                      >
                        100%
                      </h1>
                      <div class="ps-4">
                        <p class="mb-0">Rate</p>
                        <h6 class="text-uppercase mb-0">Satistaction</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  class="btn btn-outline-success py-3 px-5 mt-2 font-weight-bold d-flex justify-content-center"
                  to="/calculator"
                >
                  Let's start
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
