// src/components/Gallery.js
import React from 'react';
import './Gallery.css';
import { Link } from 'react-router-dom';

const Gallery = ({ photos }) => {
  {if(photos.length===0){
    return(
  <div className='gallery'>
    <h1 style={{margin:'auto',fontSize:'16px'}}>No Photos Found</h1>
  </div>
    )
  }}
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-thumbnail">
          <Link to={`/photo/${photo.id}`}>
            <img src={photo.url} alt={photo.title} />
             
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
