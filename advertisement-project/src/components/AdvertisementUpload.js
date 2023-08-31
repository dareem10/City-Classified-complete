import React, { useState } from 'react';
import './AdvertisementUpload.css';
import UserLogin from './UserLogin'; // Import the UserLogin component

const AdvertisementUpload = () => {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState(null);

  const handleUserLogin = (username) => {
    // Perform user login logic here
    // For this example, just store the username
    setUser(username);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform advertisement upload logic here
    // Include the title, description, city, and image in your submission
    console.log(title, description, city, image);
  };

  return (
    <div className="upload-container">
      <h2>Upload Advertisement</h2>
      {!user && <UserLogin onLogin={handleUserLogin} />}

      {user && (
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
          />

          <label>Description:</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
          />

          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
          />

          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button type="submit">Upload</button>
        </form>
      )}
    </div>
  );
};

export default AdvertisementUpload;
