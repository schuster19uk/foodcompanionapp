// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Updated

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your signup logic
      await axios.post('http://localhost:5000/api/signup', { email, password });
      // Navigate to login page or dashboard after successful signup
      navigate('/login'); // Updated
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="Signup">
      <h2>Signup</h2>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;