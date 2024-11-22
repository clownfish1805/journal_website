import React from "react";
import "./Footer.css";
import logo from "./../../Assets/logo.svg";
import grouplogo from "./../../Assets/grouplogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-image">
          <img src={logo}></img>
          <img src={grouplogo}></img>
        </div>
        <div className="footer-info">&copy;Copyright @ IJAE2022</div>
        <div className="footer-address" style={{ marginRight: "10px" }}>
          Email : editor.ijeae@gmail.com
        </div>
      </div>
    </>
  );
};

export default Footer;
