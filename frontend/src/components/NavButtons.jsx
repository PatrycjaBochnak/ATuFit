import React from "react";
import { Link } from "react-scroll";

const NavButtons = ({ source, linkName }) => (
  <div className="relative group">
    <Link
      className="no-underline text-gray-300 hover:text-white transition duration-200 cursor-pointer"
      activeClass="active"
      to={source}
      spy={true}
      smooth={true}
      offset={-60}
      duration={500}
    >
      {linkName}
    </Link>
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
  </div>
);

export default NavButtons;
