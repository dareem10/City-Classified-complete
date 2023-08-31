import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory(); // Initialize the history object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // Default user type

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here

    // Redirect to the home page
    history.push('/');
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Rest of your form inputs */}
        
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
