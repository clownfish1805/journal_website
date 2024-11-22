import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // To handle navigation and dynamic parameters
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const VolumesPage = () => {
  const { year } = useParams(); // Get the year from the URL parameters
  const [volumes, setVolumes] = useState([]);
  const [volumeData, setVolumeData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVolumes = async () => {
      try {
        // Fetch volumes for the specified year from the backend
        const response = await fetch(
          `https://publication-backend-klr9.onrender.com/volumes?year=${year}`
        );
        const data = await response.json();
        setVolumes(data); // Set volumes data

        const volumesData = {};
        for (const volume of data) {
          // Fetch publications for each volume to get the count
          const publicationsResponse = await fetch(
            `https://publication-backend-klr9.onrender.com/publications?year=${year}&volume=${volume}`
          );
          const publications = await publicationsResponse.json();
          volumesData[volume] = publications.length; // Store the number of publications for each volume
        }
        setVolumeData(volumesData); // Update the state with the count data
      } catch (error) {
        console.error("Error fetching volumes:", error);
      }
    };

    if (year) {
      fetchVolumes(); // Fetch volumes and publication data when the year is available
    }
  }, [year]); // Re-run the effect if the `year` changes

  // Handle volume click (navigate to the publications page for that volume)
  const handleVolumeClick = (volume) => {
    navigate(`/publications/${year}/${volume}`); // Navigate to the publications page for that volume
  };

  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div className="text-class">
          <span style={{ color: "blue" }}>Volumes </span>
          of {year}
        </div>
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
                {/* Display the number of publications in this volume */}
                {volumeData[volume] !== undefined ? (
                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "14px",
                      color: "#555",
                    }}
                  >
                    ({volumeData[volume]} publications)
                  </span>
                ) : (
                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "14px",
                      color: "#aaa",
                    }}
                  >
                    (Loading...)
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Loading volumes...</p> // Show loading message if volumes data is not loaded
        )}
      </div>
      <Footer />
    </>
  );
};

export default VolumesPage;
