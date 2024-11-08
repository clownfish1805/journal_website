import React from "react";
import "./Footer.css";
import logo from "./../../Assets/logo.svg";
import grouplogo from "./../../Assets/grouplogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-image">
          <img src={logo} style={{ marginTop: "50px" }}></img>
          <img src={grouplogo}></img>
        </div>
        <div className="footer-info">
          <p>&copy;Copyright @ IJAE2022</p>
        </div>
        <div className="footer-address" style={{ marginRight: "10px" }}>
          <p>Address: 123 Main Street, City, Country</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
