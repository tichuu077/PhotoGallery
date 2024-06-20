// src/pages/UploadPage.js
import React from 'react';
import UploadForm from '../components/UploadForm';

const UploadPage = ({ onUpload }) => {
  const handleUpload = (photo) => {
    const newPhoto = {
      id: Date.now(),
      title: photo.title,
      description: photo.description,
      url: URL.createObjectURL(photo.file)
    };
    onUpload(newPhoto);
  };

  return (
    <div className="container">
      <h1>Upload Photo</h1>
      <UploadForm onUpload={handleUpload} />
    </div>
  );
};

export default UploadPage;
