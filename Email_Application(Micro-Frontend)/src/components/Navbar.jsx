import React from "react";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">📧 MyEmail</div>
      <input type="text" className="search-bar" placeholder="Search mail..." />
   

      
      <div className="profile">👤</div>

    </nav>
  );
};

export default Navbar;
