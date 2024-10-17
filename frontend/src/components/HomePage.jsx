import React, { useEffect } from "react";
import NavButtons from "./NavButtons";

const HomePage = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#text-2", { delay: 2000, origin: "top" });
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
    sr.reveal("#content-2", { delay: 2000, origin: "bottom" });
    sr.reveal("#button", { delay: 3000, origin: "bottom" });
  }, [sr]);

  return (
    <div className="home-page flex flex-col items-center justify-center h-screen bg-[#081325] text-gray-300">
      <div className="welcome text-center mb-8">
        <h5 id="text" className="text-lg text-pink-600 font-bold">
          ATUFIT
        </h5>
        <h1
          id="content"
          className="text-4xl mt-2 text-[#8892b0] sm:text-6xl font-extrabold"
        >
          YOUR DAILY ASSISTANT
        </h1>
        <p id="content-2" className="mt-5 max-w-prose mx-auto text-gray-300">
          Our team has developed a simple and easy-to-use diet diary builder. It
          is powered by a constantly expanding range of new and proven products.
        </p>
      </div>
      <div id="text-2" className="welcome-opinions flex flex-wrap justify-center gap-8 mt-12">
        <div className="first-op bg-[#0A1D37] text-center p-6 rounded-lg shadow-lg mx-4">
          <h2 className="text-4xl font-extrabold text-white">150+</h2>
          <p className="text-lg text-gray-200">Products</p>
          <h6 className="text-sm text-gray-400">Available</h6>
        </div>
        <div className="second-op bg-[#0A1D37] text-center p-6 rounded-lg shadow-lg mx-4">
          <h2 className="text-4xl font-extrabold text-white">100%</h2>
          <p className="text-lg text-gray-200">Rate</p>
          <h6 className="text-sm text-gray-400">Satisfaction</h6>
        </div>
      </div>
      <button id="button" className="mt-10 py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
        <NavButtons source="calculator-BMR" linkName="Let's start" />
      </button>
    </div>
  );
};

export default HomePage;
