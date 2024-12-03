import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./PublicationsPage.css";

const PublicationsPage = () => {
  const { year, volume } = useParams();
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch(
          `https://publication-backend-klr9.onrender.com/publications?year=${year}&volume=${volume}`
        );
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    };

    fetchPublications();
  }, [year, volume]);

  return (
    <div className="publications-page">
      <Header />
      <div className="content">
        <div className="heading-class">
          Archives of
          <span style={{ color: "blue" }}> {year} </span>
        </div>

        <div className="publications-container">
          {publications.length > 0 ? (
            publications.map((publication, index) => (
              <div key={publication.id} className="publication-box">
                <p>
                  {index + 1}. {publication.title}
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "10px" }}
                  >
                    Get PDF
                  </a>
                </p>
              </div>
            ))
          ) : (
            <p>No publications found for this volume.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PublicationsPage;
