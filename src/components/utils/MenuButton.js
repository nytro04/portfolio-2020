import React from "react";

const MenuButton = () => {
  return (
    <button
      className={
        this.props.menuOpen ? "menu-toggle close-button" : "menu-toggle"
      }
    >
      <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
  );
};

export default MenuButton;
