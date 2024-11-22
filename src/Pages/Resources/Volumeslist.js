import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Volumeslist.css";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Volumeslist = () => {
  const { year, volumeId } = useParams(); // Retrieve both the year and volumeId from the URL
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // Fetch publications for the specific year and volume
        const response = await fetch(
          `${backendUrl}/publications/${year}/${volumeId}`
        );
        const data = await response.json();
        setPublications(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching publications:", error);
        setLoading(false);
      }
    };
    fetchPublications();
  }, [year, volumeId]);

  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div
          className="text-class"
          style={{ fontSize: "2rem", marginBottom: "20px" }}
        >
          Publications in Volume {volumeId} of Year {year}
        </div>
      </div>
      <div className="publications-container">
        {loading ? (
          <p>Loading publications...</p>
        ) : publications.length > 0 ? (
          publications.map((pub, index) => (
            <div key={pub._id} className="publication-box">
              <h3>
                {index + 1}. {pub.title}
              </h3>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
              >
                Get PDF
              </a>
            </div>
          ))
        ) : (
          <p>No publications found for this volume.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Volumeslist;
