import React from "react";
import Navbar from "../layout/Navbar";
import { ReactComponent as ProfileSvg } from "../../assets/img/me.svg";

// import { ReactComponent as PhoneImg } from "../../assets/PHONE/PHONE.svg";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-50-ns">
            <h1 className="">Francis Badasu</h1>
            <h3>Frontend Developer</h3>
            <h5 className="mv4">
              I love to translate designs into clean, elegant, functional and
              responsive User Interfaces.
            </h5>
          </div>
          <div className="fl w-100 w-50-ns"></div>
        </div>
        <ProfileSvg />
        {/* <img src={profileSvg} alt="profile illustration" /> */}
        {/* <div className="flex mt6 justify-around items-center">
          <h1 className="">Francis Badasu</h1>
          <h3>Frontend Developer</h3>
          <h5 className="mv4">
            I love to translate designs into clean, elegant, functional and
            responsive User Interfaces.
          </h5>
        </div>
        <div>black illustration goes here</div> */}
      </div>
    </div>
  );
};

export default Header;
