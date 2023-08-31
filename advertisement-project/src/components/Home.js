import React, { useState, useEffect } from 'react';
import './Home.css';
import featureImage1 from '../images/feature1.jpg';
import featureImage2 from '../images/feature2.jpg';
import featureImage3 from '../images/feature3.jpg';
import bannerImage from '../images/banner.jpg';
import slideImage1 from '../images/slide1.jpg';
import slideImage2 from '../images/slide2.jpg';
import slideImage3 from '../images/slide3.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = [slideImage1, slideImage2, slideImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
        <div className="banner-overlay"></div>
      </div>
      <h1 className="home-header">Discover Latest Advertisements</h1>
      <p className="home-subheader">
        Find the best deals and opportunities near you.
      </p>

      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slideImages.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="feature">
        <div className="feature-image">
          <img src={featureImage1} alt="Feature 1" />
        </div>
        <div className="feature-description">
          <h3>Explore Local Advertisements</h3>
          <p>
            Discover a wide range of advertisements for products and services in your city.
          </p>
        </div>
      </div>

      <div className="feature">
        <div className="feature-description">
          <h3>Easy Advertisement Upload</h3>
          <p>
            Are you a business owner? Upload your advertisements quickly and easily.
          </p>
        </div>
        <div className="feature-image">
          <img src={featureImage2} alt="Feature 2" />
        </div>
      </div>

      <div className="feature">
        <div className="feature-image">
          <img src={featureImage3} alt="Feature 3" />
        </div>
        <div className="feature-description">
          <h3>Stay Updated</h3>
          <p>
            Get notifications about new advertisements and special offers in your area.
          </p>
        </div>
      </div>

      <a href="/login" className="home-button">
        Get Started
      </a>
    </div>
  );
};

export default Home;
