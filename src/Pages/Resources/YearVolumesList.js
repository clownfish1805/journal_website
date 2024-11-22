import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./YearVolumesList.css"; // Assuming you create a CSS file for styling

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const YearVolumesList = () => {
  const { year } = useParams(); // Retrieve the year from the URL
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVolumes = async () => {
      try {
        const response = await fetch(`${backendUrl}/volumes/${year}`); // API endpoint to fetch volumes by year
        const data = await response.json();
        setVolumes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching volumes:", error);
        setLoading(false);
      }
    };
    fetchVolumes();
  }, [year]);

  const handleVolumeClick = (volumeId) => {
    navigate(`/volumes/${year}/${volumeId}`); // Navigate to the specific volume's publications
  };

  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div
          className="text-class"
          style={{ fontSize: "2rem", marginBottom: "20px" }}
        >
          Volumes in Year {year}
        </div>
      </div>
      <div className="volumes-container">
        {loading ? (
          <p>Loading volumes...</p>
        ) : volumes.length > 0 ? (
          volumes.map((volume) => (
            <div
              key={volume._id}
              className="volume-box"
              onClick={() => handleVolumeClick(volume.volume)}
            >
              <h3>Volume {volume.volume}</h3>
              <p>{volume.publications.length} Publications</p>
            </div>
          ))
        ) : (
          <p>No volumes found for this year.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default YearVolumesList;
