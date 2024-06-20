// src/pages/GalleryPage.js
import React from 'react';
import Gallery from '../components/Gallery';

const GalleryPage = ({ photos }) => {
  return (
    <div className="container">
      <h1>Gallery</h1>
      <Gallery photos={photos} />
    </div>
  );
};

export default GalleryPage;
