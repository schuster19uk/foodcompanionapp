import React from 'react';

import Navbar from './Navbar'; // Import the Navbar component
import { Link } from 'react-router-dom';
import './Home.css'; // If using Home.css

function Home() {
  return (
    <div className="Home">
      {/* <Navbar /> Include Navbar here */}
      <h1>Welcome to My App</h1>
      <p>Please choose an option to get started:</p>
      <div className="links">
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;