import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./../../Assets/logo.svg";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="Journal Website Logo" className="logo" />
        <div className={`nav-container ${isNavOpen ? "active" : ""}`}>
          <nav className="nav">
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
            <Link
              to="/authorguide"
              className={
                location.pathname === "/authorguide" ? "active-link" : ""
              }
            >
              Guidelines
            </Link>
            <Link
              to="/resources"
              className={
                location.pathname === "/resources" ? "active-link" : ""
              }
            >
              Resources
            </Link>
            <div
              className={`dropdown-wrapper ${
                location.pathname === "/contactus" ||
                location.pathname === "/editorial" ||
                location.pathname === "/announcement"
                  ? "active-link"
                  : ""
              }`}
              onClick={toggleDropdown}
            >
              About
              {isDropdownOpen ? (
                <FaChevronUp className="dropdown-icon" />
              ) : (
                <FaChevronDown className="dropdown-icon" />
              )}
              {isDropdownOpen && (
                <div className="dropdown">
                  <Link to="/announcement">Announcement</Link>
                  <Link to="/editorial">Editorial Board</Link>
                  <Link to="/contactus">Contact us</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="hamburger-menu" onClick={toggleNav}>
          {isNavOpen ? (
            <FaTimes className="hamburger-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
