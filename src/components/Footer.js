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
        <Link
          to="/contact-us"
          className="footer-link footer-link-ext"
        >
          إتصل بنا
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
