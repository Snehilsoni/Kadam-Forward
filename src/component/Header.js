import React from 'react';
import './Header.css'; // Assuming you will create a Header.css for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Kadam Forward</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/career">Career</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;