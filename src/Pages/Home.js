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
        <div className="text-class">
          <span style={{ color: "blue" }}>International </span>Journal of
          <br></br>
          Academic <span style={{ color: "blue" }}>Excellence</span>
          <div>
            <button
              style={{
                backgroundColor: "blue",
                borderRadius: "25%",
                padding: "20px 40px",
                fontSize: "18px",
                color: "white",
                border: "none",
                fontWeight: "bold",
                textShadow: "inherit",
                marginTop: "10px",
              }}
            >
              Contact
            </button>
            <button
              style={{
                borderColor: "blue",
                borderRadius: "25%",
                padding: "20px 20px",
                fontSize: "18px",
                color: "blue",
                marginLeft: "10px",
                fontWeight: "bold",
                textShadow: "initial",
                marginTop: "10px",
              }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3
          style={{ textAlign: "center", fontSize: "2rem", marginTop: "40px" }}
        >
          <span style={{ color: "blue" }}>IJAE </span>encourages diverse forms
          of Scholarly work
        </h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="box">
            <h3>Research Articles</h3>
            <p>
              Comprehensive studies that present original research findings and
              contribute new insights to the academic community.
            </p>
          </div>
          <div class="box">
            <h3>Review Articles</h3>
            <p>
              In-depth analyses of current developments in a specific field,
              summarizing recent research and identifying trends and future
              directions.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="box">
            <h3>Short Communications</h3>
            <p>
              Brief reports on significant research developments or preliminary
              findings that warrant immediate dissemination.
            </p>
          </div>
          <div class="box">
            <h3>Case Reports/Case Series</h3>
            <p>
              Detailed reports on particular cases or series that contribute to
              understanding complex academic phenomena.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="box fifth-box">
            <h3>Conference Proceedings</h3>
            <p>
              Selected papers from academic conferences, providing broader
              dissemination of important research presented at such events.
            </p>
          </div>
        </div>
      </div>

      <div className="about-journal">
        <h3>About the Journal</h3>
        <div className="journal-info">
          The International Journal of Academic Excellence (IJAE) is a monthly
          peer-reviewed, open-access journal published by the Academic
          Development Forum (ADF), India. Launched in 2024, IJAE serves as a
          premier platform for interdisciplinary scholarship, inviting
          contributions from researchers and practitioners across a variety of
          academic fields. With a focus on high-quality research in social
          sciences, humanities and educational sciences, the journal seeks to
          foster academic discourse and promote innovation in these areas.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
