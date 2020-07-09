import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpened, setIsOpened] = useState(false);
  // const [state, setstate] = useState(initialState)

  const toggle = () => setIsOpened(!isOpened);

  return (
    <div id="curtain">
      <span></span>
      <span></span>
      <span></span>
      <ul>
        <li>
          <Link to="Home">Home</Link>
        </li>
        <li>
          <Link to="Home">About</Link>
        </li>
        <li>
          <Link to="Home">Projects</Link>
        </li>
        <li>
          <Link to="Home">contact</Link>
        </li>
      </ul>
      <button onClick={toggle} className="toggle">
        {isOpened}
      </button>
    </div>
  );
};

export default Menu;
