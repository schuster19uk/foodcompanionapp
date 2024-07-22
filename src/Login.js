// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Updated

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your login logic
      await axios.post('http://localhost:5000/api/login', { email, password });
      // Navigate to homepage or dashboard after successful login
      navigate('/'); // Updated
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;