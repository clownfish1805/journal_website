import React from "react";
import "./Home.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import bg from "../Assets/bg.svg";

const Home = () => {
  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <img src={bg}></img>
      </div>
      <Footer />
    </>
  );
};

export default Home;
