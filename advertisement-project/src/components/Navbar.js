import React, { useState } from 'react';
import { Link, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AdminDashboardLink from './AdminDashboardLink';
import './Navbar.css';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Advertisement from './Advertisement';
import AdvertisementUpload from './AdvertisementUpload';
import AdminPage from './AdminPage'; // Import the AdminPage component

const Navbar = ({ loggedIn, isAdmin, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here using searchTerm
    console.log('Searching for:', searchTerm);
    setSearchTerm(''); // Clear the search input after searching
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/upload">Upload Advertisement</Link>
          </li>
          <li>
            <Link to="/advertisement">Advertisements</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/admin">Admin Dashboard</Link>
          </li>
        </ul>

        {/* Search bar */}
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search by name or city..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </nav>

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/upload" component={AdvertisementUpload} />
          <Route path="/advertisement" component={Advertisement} />
          <Route path="/admin" component={AdminPage} /> {/* Render the AdminPage component */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
