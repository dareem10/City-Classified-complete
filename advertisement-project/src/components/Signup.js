import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // Default to 'user' role

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    // For now, let's just redirect to the home page after successful signup
    history.push('/');
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
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
        <div className="user-type">
          <label>
            <input
              type="radio"
              value="user"
              checked={userType === 'user'}
              onChange={() => setUserType('user')}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              value="admin"
              checked={userType === 'admin'}
              onChange={() => setUserType('admin')}
            />
            Admin
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
