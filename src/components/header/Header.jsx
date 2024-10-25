import React, { useState } from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/calderon-builders-inc-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Calderon Builders Inc. Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/"onClick={handleNavClick}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={handleNavClick}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={handleNavClick}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
