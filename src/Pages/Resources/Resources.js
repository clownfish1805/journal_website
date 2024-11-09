import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Resources.css";

const Resources = () => {
  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div className="text-class" style={{ fontSize: "3rem" }}>
          Editorial
          <span style={{ color: "blue" }}> Board</span>
        </div>
      </div>

      <Resources />
    </>
  );
};
export default Resources;
