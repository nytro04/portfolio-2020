import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-dark-red">
      <span>logo goes here</span>

      <ul className="flex list">
        <li className="mb6">call me (+233549970041)</li>
        {/* <li>/</li> */}
        <li>nytro04@gmail.com</li>
      </ul>
    </nav>
  );
};

export default Navbar;
