import React, { useState } from 'react';

const ChangeCityDetails = () => {
  const [city, setCity] = useState('New Delhi'); // Initial city value

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update city details here
  };

  return (
    <div>
      <h3>Change City Details</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ChangeCityDetails;
