import React from "react";
import Navbar from "../layout/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mt6 justify-around items-center">
        <div>
          <h1 className="">Francis Badasu</h1>
          <h3>Frontend Developer</h3>
          <h5 className="mv4">
            I love to translate designs into clean, elegant, functional and
            responsive User Interfaces.
          </h5>
        </div>
        <div>black illustration goes here</div>
      </div>
    </div>
  );
};

export default Header;
