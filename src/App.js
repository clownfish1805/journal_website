import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Announcement from "./Pages/Announcement";
import Authorguide from "./Pages/Authorguide";
import Editorial from "./Pages/Editorial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/authorguide" element={<Authorguide />} />
        <Route path="/editorial" element={<Editorial />} />
      </Routes>
    </Router>
  );
}

export default App;
