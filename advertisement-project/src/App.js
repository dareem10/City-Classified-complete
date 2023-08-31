import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Advertisement from './components/Advertisement'; // Import the Advertisement component
import AdvertisementUpload from './components/AdvertisementUpload';
import AdminDashboard from './components/AdminDashboard';
import EditAdvertisement from './components/EditAdvertisement';
import ChangeCityDetails from './components/ChangeCityDetails';
import AdminPage from './components/AdminPage';


import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (isAdmin) => {
    // Implement your login logic here
    setLoggedIn(true);
    setIsAdmin(isAdmin);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <Router>
      <div className="App">
        {/* <Navbar loggedIn={loggedIn} isAdmin={isAdmin} onLogout={handleLogout} /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/login" render={(props) => <Login {...props} onLogin={handleLogin} />} />
          <Route path="/signup"  >
            <Signup></Signup>
            </Route>
          <Route path="/admin" exact>
            {isAdmin ? <AdminDashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/admin">
            {isAdmin ? <AdminDashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/admin/edit/:index" component={EditAdvertisement} />
          <Route path="/admin/city" component={ChangeCityDetails} />
          <Route path="/upload" component={AdvertisementUpload} />
          <Route path="/advertisement" component={Advertisement} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
