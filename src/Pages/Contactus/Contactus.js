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
          Academic Development Forum (ADF) <br></br>Email id :
          <a href="mailto:academicdevelopmentforum24@gmail.com">
            academicdevelopmentforum24@gmail.com
          </a>
        </p>
        <p style={{ fontWeight: "bold" }}>EDITOR-IN-CHIEF</p>
        <p>
          International Journal of English for Academic Excellence<br></br>Email
          id :<a href="mailto:editor.ijeae@gmail.com">editor.ijeae@gmail.com</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
