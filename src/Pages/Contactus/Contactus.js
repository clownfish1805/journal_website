import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Contactus.css";

const Contactus = () => {
  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div className="text-class" style={{ fontSize: "3rem" }}>
          Contact
          <span style={{ color: "blue" }}> Us</span>
        </div>
      </div>
      <div className="container-contact">
        <p style={{ fontWeight: "bold" }}>THE PUBLISHER</p>
        <p>
          <p>Academic Development Forum (ADF)</p>
          Address:
          <br></br>Email id:
        </p>
        <p style={{ fontWeight: "bold" }}>EDITOR-IN-CHIEF</p>
        <p>
          <p>International Journal of Academic Excellence</p>
          Address:
          <br></br>Email id:
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
