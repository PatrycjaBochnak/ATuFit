import React from "react";
import { Link } from "react-scroll";

const NavButtons = ({ source, linkName }) => (
    <Link
    className="button"
    activeClass="active"
    to={source}
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>
    {linkName}
</Link>
); 

export default NavButtons;