import React, { useState } from "react";
import Menu from "../Menu";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const linksArray = [
    { name: "home", url: "#" },
    { name: "log in", url: "#" },
    { name: "photos", url: "#" },
    { name: "contact", url: "#" },
    { name: "download", url: "#" },
  ];

  const socialArray = [
    {
      icon: "fa fa-github-square",
      url: "https://github.com/matthewvincent",
    },
    {
      icon: "fa fa-instagram",
      url: "https://www.instagram.com/middlestates/",
    },
    {
      icon: "fa fa-tumblr-square",
      url: "http://matthewvincentphotography.com/",
    },
  ];

  return <nav className="flex justify-around mt2 ttu"></nav>;
};

export default Navbar;
