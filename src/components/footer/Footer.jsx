import React from "react";
import "./footer.css";

const Footer = () => {
  return (
      <div className="container-fluid" style={{ backgroundColor: "red" }}>
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
      </div>
  );
};

export default Footer;
