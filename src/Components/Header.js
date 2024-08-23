import React, { useState } from 'react';
// import rlogo from '../Assets/rlogo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaMoon } from "react-icons/fa";

function Header() {

  const [theme, setTheme] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo">
        
         <h1>Rahul.</h1>
        </div>

        {/* Navigation Links */}
        <nav className="navigation">
          <div className="links">
            <Link to="/">Home</Link>
          </div>
          <div className="links">
            <Link to="/about">About</Link>
          </div>
          <div className="links">
            <Link to="/service">Service</Link>
          </div>
          <div className="links">
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="links">
            <Link to="/education">Education</Link>
          </div>
          <div className="links">
            <Link to="/contact">Contact</Link>
          </div>
          {/* <div className='theme' onClick={()=>setTheme(!theme)}> */}
          <FaMoon/>
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
