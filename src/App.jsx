// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import GalleryPage from "./pages/GalleryPage";
import PhotoDetailsPage from "./pages/PhotoDetailsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"; // Import the global CSS file

const App = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (newPhoto) => {
    setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
  };

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/upload"
            element={<UploadPage onUpload={handleUpload} />}
          />
          <Route path="/gallery" element={<GalleryPage photos={photos} />} />
          <Route path="/gallery" element={<GalleryPage photos={photos} />} />
          <Route path="/photo/:id" element={<PhotoDetailsPage photos={photos} />}
          />
          <Route path="/" element={<GalleryPage photos={photos} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
