// src/components/Gallery.js
import {  useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import "./Gallery.css";
import { useState } from "react";
import { removePhoto } from "../featurs/uploadSlice";
const Gallery = () => {
  const dispatch =useDispatch()
  const photos = useSelector((state) => state.uploadPhoto.photos);
  console.log(photos)
 const [display,setDisplay]=useState(false)
 const navigate = useNavigate()
  if (photos.length === 0) {
    return (
      <div className="gallery">
        <h1 style={{ margin: "auto", fontSize: "16px" }}>No Photos Found</h1>
      </div>
    );
  }

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-thumbnail" onMouseOver={()=>setDisplay(true)} onMouseLeave={()=>setDisplay(false)}>
          <div
            style={{
              position: "absolute",
              top: "43%",
              left: "32%",
              display:display?'flex':'none',
              justifyContent: "space-around",
              alignItems: "center",
              zIndex:'10',
              backgroundColor:'black',
              opacity:'0.5',
              height:'15%',
              width:'35%',
              
            }}
          >
            <div style={{color:"white",zIndex:'20',cursor:'pointer'}} onClick={()=>navigate(`/photo/${photo.id}`)}>See</div>
            <div style={{color:'white',zIndex:'20',cursor:'pointer'}} onClick={()=>dispatch(removePhoto(photo.id))}>Remove</div>
          </div>
         
            <img src={photo.url} alt={photo.title} />
           
        </div>
      ))}
    </div>
  );
};

export default Gallery;
