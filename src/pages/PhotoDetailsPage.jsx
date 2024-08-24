// src/pages/PhotoDetailsPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './photoDetailsPage.css'
import { useSelector } from 'react-redux';
const PhotoDetailsPage = () => {
  const photos = useSelector((state)=> state.uploadPhoto.photos)
  const { id } = useParams();
  const photo = photos.find((p) => p.id === parseInt(id));

  if (!photo) {
    return <div className="container">Photo not found</div>;
  }

  return (
    <div className="photocontainer">
      <h1>{photo.title}</h1>
      <div className='imgbox'> 
      <img src={photo.url} alt={photo.title} />
        </div>
      <p>{photo.description}</p>
      <Link to="/gallery"><button>Back to Gallery</button></Link>
    </div>
  );
};

export default PhotoDetailsPage;