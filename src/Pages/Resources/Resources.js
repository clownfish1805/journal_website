import React, { useEffect, useState } from "react";
import "./Resources.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

// Set your backend URL
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Resources = () => {
  const [years, setYears] = useState([]); // Holds years
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await fetch(`${backendUrl}/years`); // API to fetch years
        const data = await response.json();
        console.log("Fetched data:", data);
        setYears(data); // Set the years in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching years:", error);
        setLoading(false);
      }
    };
    fetchYears();
  }, []);

  // Handle year click
  const handleYearClick = (year) => {
    navigate(`/volumes/${year}`); // Navigate to volumes page for that year
  };

  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div className="text-class" style={{ fontSize: "3rem" }}>
          Available Years
        </div>
      </div>
      <div className="years-container">
        {loading ? (
          <p>Loading years...</p>
        ) : years.length > 0 ? (
          <div className="years-grid">
            {years.map((year) => (
              <div
                key={year}
                className="year-box"
                onClick={() => handleYearClick(year)}
              >
                <h3>{year}</h3>
                <p>Click to view volumes</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No years available.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Resources;
