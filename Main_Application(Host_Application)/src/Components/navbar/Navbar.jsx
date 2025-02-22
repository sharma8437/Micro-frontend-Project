import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Micro-Frontend
     
      </div>
      
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="btn-container">
        <Link to="/mail">
          <button className="btn">Get Email</button>
        </Link>
        <Link to="/chat">
          <button className="btn">Start Chat</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
