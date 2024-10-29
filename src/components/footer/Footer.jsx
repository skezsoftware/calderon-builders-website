import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="container-fluid">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-body-secondary" onClick={scrollToTop}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link px-2 text-body-secondary" onClick={scrollToTop}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link px-2 text-body-secondary" onClick={scrollToTop}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link px-2 text-body-secondary" onClick={scrollToTop}>
              Contact
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
