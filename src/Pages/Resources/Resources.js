import React, { useEffect, useState } from "react";
import "./Resources.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

// const API_URL = "https://publication-backend-klr9.onrender.com/publications";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Resources = () => {
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVolumes = async () => {
      try {
        const response = await fetch(backendUrl);
        const data = await response.json();
        const groupedVolumes = data.reduce((acc, item) => {
          const { volume } = item;
          if (!acc[volume]) acc[volume] = [];
          acc[volume].push(item);
          return acc;
        }, {});
        setVolumes(groupedVolumes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching volumes:", error);
        setLoading(false);
      }
    };
    fetchVolumes();
  }, []);

  const handleVolumeClick = (volume) => {
    navigate(`/volume/${volume}`);
  };

  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div className="text-class" style={{ fontSize: "3rem" }}>
          Volumes
        </div>
      </div>
      <div className="volumes-container">
        {loading ? (
          <p>Loading volumes...</p>
        ) : (
          Object.keys(volumes).map((volume) => (
            <div
              key={volume}
              className="volume-box"
              onClick={() => handleVolumeClick(volume)}
            >
              <h3>Volume {volume}</h3>
              <p>{volumes[volume].length} Publications</p>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
};

export default Resources;
