// src/components/UploadForm.js
import React, { useState } from "react";
import "./UploadForm.css";

const UploadForm = ({ onUpload }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [text,setText]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload({ title, description, file });
    }
     setText('Photo Upload')
    setTimeout(()=>{
       setText('')
    },1000);
    
    setTitle("");
    setDescription("");
    setFile(null);
    e.target.reset();
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="formcontainer">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      ></textarea>
      <button type="submit">Upload</button>
    </form>
     <h4>{text}</h4>
    </>
  );
};

export default UploadForm;
