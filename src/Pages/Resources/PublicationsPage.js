import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const PublicationsPage = () => {
  const { year, volume } = useParams(); // Get the year and volume from URL params
  const [publications, setPublications] = useState([]);

  // Fetch publications for the selected year and volume
  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch(
          `https://publication-backend-klr9.onrender.com/publications?year=${year}&volume=${volume}`
        );
        const data = await response.json();
        setPublications(data); // Set the publications data
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    };

    fetchPublications();
  }, [year, volume]); // Re-run the effect when the year or volume changes

  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div className="text-class">
          Archives of
          <span style={{ color: "blue" }}> {year} </span>
        </div>
      </div>

      <div className="publications-container">
        {publications.length > 0 ? (
          publications.map((publication, index) => (
            <div key={publication.id} className="publication-box">
              <h3>
                {index + 1}. {publication.title}
              </h3>
              <h2>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get PDF
                </a>
              </h2>
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

export default PublicationsPage;
