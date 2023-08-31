import React, { useState } from 'react';

const EditAdvertisement = ({ match }) => {
  const adIndex = match.params.index; // Get advertisement index from URL

  // Import or pass the advertisements array from a higher-level component
  const advertisements = [
    // ... your advertisements data here
  ];

  const [adData, setAdData] = useState(advertisements[adIndex]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdData({ ...adData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update advertisement data here
    // Redirect to the advertisement list after update
  };

  return (
    <div>
      <h3>Edit Advertisement</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={adData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          value={adData.description}
          onChange={handleInputChange}
        />
        {/* Other inputs for editing */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditAdvertisement;
