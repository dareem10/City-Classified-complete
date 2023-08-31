import React from 'react';
import './Advertisement.css'; // Import the CSS file
import adImage1 from '../images/ad-image1.jpg'; // Import the first image
import adImage2 from '../images/ad-image2.jpg'; // Import the second image

const Advertisement = () => {
  return (
    <div className="advertisement-container">
      {/* First Advertisement */}
      <div className="advertisement-card">
        <img src={adImage1} alt="Advertisement 1" className="ad-image" />
        <div className="advertisement-bubble">
          <span>New Delhi</span>
        </div>
        <div className="ad-content">
          <h2>Special Offer</h2>
          <p>Get 20% off on selected items this week!</p>
          <button>Learn More</button>
        </div>
      </div>

      {/* Second Advertisement */}
      <div className="advertisement-card">
        <img src={adImage2} alt="Advertisement 2" className="ad-image" />
        <div className="advertisement-bubble">
          <span>Mumbai</span>
        </div>
        <div className="ad-content">
          <h2>New Arrival</h2>
          <p>Discover our latest collection for the upcoming season.</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
