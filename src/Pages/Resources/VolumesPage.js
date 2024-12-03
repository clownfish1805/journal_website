import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./YearVolumesList.css";

const VolumesPage = () => {
  const { year } = useParams();
  const [volumes, setVolumes] = useState([]);
  const [volumeData, setVolumeData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVolumes = async () => {
      try {
        const response = await fetch(
          `https://publication-backend-klr9.onrender.com/volumes?year=${year}`
        );
        const data = await response.json();
        setVolumes(data);

        const volumesData = {};
        for (const volume of data) {
          const publicationsResponse = await fetch(
            `https://publication-backend-klr9.onrender.com/publications?year=${year}&volume=${volume}`
          );
          const publications = await publicationsResponse.json();
          volumesData[volume] = publications.length;
        }
        setVolumeData(volumesData);
      } catch (error) {
        console.error("Error fetching volumes:", error);
      }
    };

    if (year) {
      fetchVolumes();
    }
  }, [year]);

  const handleVolumeClick = (volume) => {
    navigate(`/publications/${year}/${volume}`);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="content-wrapper">
        <div className="heading-class">
          <span style={{ color: "blue" }}>Volumes </span>
          of {year}
        </div>
        <div className="years-container">
          {volumes.length > 0 ? (
            volumes.map((volume) => (
              <div
                key={volume}
                className="year-box"
                onClick={() => handleVolumeClick(volume)}
              >
                <div>
                  Volume {volume}
                  {volumeData[volume] !== undefined ? (
                    <span className="publication-count">
                      ({volumeData[volume]} publications)
                    </span>
                  ) : (
                    <span className="loading-text">(Loading...)</span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Loading volumes...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolumesPage;
