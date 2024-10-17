import React, { useState } from "react";
import NavButtons from "../components/NavButtons";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            {/* Hamburger Icon */}
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-900 text-gray-300 space-y-4 py-4`}
      >
        <NavButtons source="home-page" linkName="Start" />
        <NavButtons source="calculator-BMR" linkName="Calculator" />
        <NavButtons source="counter" linkName="Calories counter" />
        <NavButtons source="add-product" linkName="Add product" />
        <NavButtons source="daily-results" linkName="Daily results" />
        <NavButtons source="contact" linkName="Contact" />
      </div>
    </nav>
  );
};

export default NavMenu;
