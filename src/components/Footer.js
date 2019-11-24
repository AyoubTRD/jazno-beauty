import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <Link to="/privacy-policy" className="footer-link">
          privacy policy
        </Link>
        <Link to="/return-policy" className="footer-link">
          return policy
        </Link>
        <a href="/" className="footer-link footer-link-ext">
          إتصل بنا
        </a>
      </footer>
    </div>
  );
};

export default Footer;
