import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Volumeslist.css";

const API_URL = "https://publication-backend-klr9.onrender.com/publications";

const VolumesList = () => {
  const { volumeId } = useParams(); // Retrieve the volume ID from the URL
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // Pass the volumeId as a query parameter to filter the data
        const response = await fetch(`${API_URL}?volume=${volumeId}`);
        const data = await response.json();
        setPublications(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching publications:", error);
        setLoading(false);
      }
    };
    fetchPublications();
  }, [volumeId]);

  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div
          className="text-class"
          style={{ fontSize: "2rem", marginBottom: "20px" }}
        >
          Publications in Volume {volumeId}
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

export default VolumesList;
