import React from "react";
import "../styling/HeaderAndFooter.scss";
import logo from "../logo.jpg";
import reactLogo from "../logo.svg";

const Header = () => {
  return (
    <div className="navbar">
      <h1>
        Pr
        <img className="logoMain" src={logo} />
        perties test
      </h1>
      <img className="react-logo" src={reactLogo} alt="" />
    </div>
  );
};

export default Header;
