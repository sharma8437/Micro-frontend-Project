import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved by Nikesh Sharma</p>
       
      </div>
    </footer>
  );
};

export default Footer;