import React from "react";
import Menu from "../Menu";

const Navbar = () => {
  return (
    <nav className="flex justify-around mt2 ttu">
      <span>logo goes here</span>

      <ul className="flex list">
        <li className="">call me +233549970041</li>
        <li className="mh3">/</li>
        <li>nytro04@gmail.com</li>
      </ul>
      <span>
        <Menu />
      </span>
    </nav>
  );
};

export default Navbar;
