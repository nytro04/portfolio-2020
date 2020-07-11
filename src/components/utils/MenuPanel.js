import React from "react";
import { Link } from "react-router-dom";

const MenuPanel = () => {
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

  const linkList = linksArray.map((link) => (
    <li>
      <Link to={link.url}>{link.name}</Link>
    </li>
  ));

  const socialList = socialArray.map((link) => (
    <Link to={link.url}>{link.icon}</Link>
  ));

  return (
    <div
      className={
        this.props.menuOpen ? "menu-wrapper menu-open" : "menu-wrapper"
      }
    >
      <div
        className={
          this.props.open
            ? "links-wrapper"
            : "links-wrapper links-wrapper-closed"
        }
      >
        <ul className="link-list">{linkList}</ul>
      </div>
      <div
        className={
          this.props.open
            ? "social-wrapper social-open"
            : "social-wrapper social-closed"
        }
      >
        {socialList}
      </div>
    </div>
  );
};

export default MenuPanel;
