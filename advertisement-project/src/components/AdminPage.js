import React, { useState } from 'react';
import './AdminPage.css'; // Import the CSS file for AdminPage

const AdminPage = () => {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAdminLogin = () => {
    // Implement admin login logic here
    setAdminLoggedIn(true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleDeleteAd = (adId) => {
    // Implement ad deletion logic here
    console.log(`Deleting ad with ID ${adId}`);
  };

  const handleEditUserDetails = (userId) => {
    // Implement user details editing logic here
    console.log(`Editing user details for user ID ${userId}`);
  };

  return (
    <div className="admin-page">
      {!adminLoggedIn ? (
        <div className="admin-login-form">
          <h3>Admin Login</h3>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="admin-login-btn" onClick={handleAdminLogin}>Login</button>
          {/* Display error message if needed */}
          {/* <p className="error-message">Invalid username or password</p> */}
        </div>
      ) : (
        <div>
          <h3>Welcome, Admin!</h3>
          {selectedOption === null ? (
            <div>
              <h4>Select an option:</h4>
              <button onClick={() => handleOptionSelect('delete')}>Delete Advertisements</button>
              <button onClick={() => handleOptionSelect('edit')}>Edit User Details</button>
            </div>
          ) : selectedOption === 'delete' ? (
            <div className="ad-list">
              <h4>Advertisements:</h4>
              <div className="ad">
                <p>Advertisement 1</p>
                <button onClick={() => handleDeleteAd(1)}>Delete</button>
              </div>
              <div className="ad">
                <p>Advertisement 2</p>
                <button onClick={() => handleDeleteAd(2)}>Delete</button>
              </div>
              {/* Add more advertisements here */}
            </div>
          ) : (
            <div className="user-details-list">
              <h4>User Details:</h4>
              {/* Display a list of user details with edit buttons */}
              <div className="user-details">
                <p>User 1</p>
                <button onClick={() => handleEditUserDetails(1)}>Edit</button>
              </div>
              <div className="user-details">
                <p>User 2</p>
                <button onClick={() => handleEditUserDetails(2)}>Edit</button>
              </div>
              {/* Add more user details here */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
