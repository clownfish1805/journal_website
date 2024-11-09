import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Announcement.css";

const Announcement = () => {
  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div className="text-class" style={{ fontSize: "3rem" }}>
          Announcement
          <span style={{ color: "blue" }}> Board</span>
        </div>
      </div>

      <div className="container-announcement">
        <div>
          <p>
            The International Journal of Academic Excellence (IJAE) publishes
            issues online at the end of every month. Authors are encouraged to
            submit their manuscripts by the 15th of each month for consideration
            in that month’s issue. Manuscripts submitted after the 15th may be
            considered for the following month's issue, though timely
            publication is not guaranteed.
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>
            If you have any further questions, please contact the
            Editor-in-Chief:
            <p>Mr. Attrait Dovin Fedrick S</p>
            <p>
              Email :
              <a
                href="mailto:attraitdovinfedrick333@gmail.com"
                style={{ marginLeft: "5px" }}
              >
                attraitdovinfedrick333@gmail.com
              </a>
            </p>
          </p>
          <p>
            Thank you for your cooperation, and stay tuned for the latest
            academic contributions each month!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Announcement;
