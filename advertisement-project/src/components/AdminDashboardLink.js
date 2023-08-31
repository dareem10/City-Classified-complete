import React, { useState } from 'react';

const AdminDashboard = () => {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false); // Track admin login status

  const handleAdminLogin = () => {
    // Implement your admin login logic here
    setAdminLoggedIn(true);
  };

  const handleDeleteAd = (adId) => {
    // Implement your ad deletion logic here
    console.log(`Deleting ad with ID ${adId}`);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {!adminLoggedIn ? (
        <button onClick={handleAdminLogin}>Admin Login</button>
      ) : (
        <div>
          <h3>Welcome, Admin!</h3>
          <button onClick={() => handleDeleteAd(1)}>Delete Ad 1</button>
          <button onClick={() => handleDeleteAd(2)}>Delete Ad 2</button>
          {/* Add more buttons for deleting ads */}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
