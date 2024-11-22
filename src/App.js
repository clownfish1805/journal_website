import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactus from "./Pages/Contactus/Contactus";
import Home from "./Pages/Home/Home";
import Announcement from "./Pages/Announcement/Announcement";
import Authorguide from "./Pages/Authorguide/Authorguide";
import Editorial from "./Pages/Editorial/Editorial";
import Resources from "./Pages/Resources/Resources";
import VolumesList from "./Pages/Resources/Volumeslist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/authorguide" element={<Authorguide />} />
      <Route path="/editorial" element={<Editorial />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/volume/:year" element={<VolumesList />} />
    </Routes>
  );
}

export default App;
