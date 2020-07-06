import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around mt3">
      <span>logo goes here</span>

      <ul className="flex justify-between list">
        <li className="mb6">call me (+233549970041)</li>
        {/* <li>/</li> */}
        <li>nytro04@gmail.com</li>
      </ul>
      <span>menu</span>
    </nav>
  );
};

export default Navbar;
