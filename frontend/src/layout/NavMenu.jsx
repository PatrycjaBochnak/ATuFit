import React, { useState } from "react";
import NavButtons from "../components/NavButtons";
import { FaBars, FaTimes } from "react-icons/fa";

const NavMenu = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-gray-300 text-2xl font-bold">ATuFit</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavButtons source="home-page" linkName="Start" />
          <NavButtons source="calculator-BMR" linkName="Calculator" />
          <NavButtons source="counter" linkName="Calories counter" />
          <NavButtons source="add-product" linkName="Add product" />
          <NavButtons source="daily-results" linkName="Daily results" />
          <NavButtons source="contact" linkName="Contact" />
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
            {/* Hamburger Icon */}
            <div
              onClick={handleClick}
              className="absolute top-4 right-4 text-2xl text-gray-300 cursor-pointer z-50"
            >
              {!nav ? <FaBars /> : <FaTimes />}
            </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? "block" : "hidden"
        } md:hidden bg-gray-900 text-gray-300 bg-opacity-100 z-40 flex flex-col items-center h-screen px-4`}
      >
        <div className="text-2xl text-white flex flex-col items-center space-y-6">
          <button className="w-full py-2 text-center">
            <NavButtons source="home-page" linkName="Start" />
          </button>
          <button className="w-full py-2 text-center">
            <NavButtons source="calculator-BMR" linkName="Calculator" />
          </button>
          <button className="w-full py-2 text-center">
            <NavButtons source="counter" linkName="Calories counter" />
          </button>
          <button className="w-full py-2 text-center">
            <NavButtons source="add-product" linkName="Add product" />
          </button>
          <button className="w-full py-2 text-center">
            <NavButtons source="daily-results" linkName="Daily results" />
          </button>
          <button className="w-full py-2 text-center">
            <NavButtons source="contact" linkName="Contact" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
