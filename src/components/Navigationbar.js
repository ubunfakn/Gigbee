import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GigBeeLogo from '../assets/gig_bee-removebg-preview 1.png'

const Navigationbar = ({ navigateToSection }) => {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Navbar.Brand href="/Gigbee#home" className='mr-auto' style={{ marginLeft: "7vw" }}><img style={{ width: "250px" }} src={GigBeeLogo} alt="The Gig Bee" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginRight: "5vw", marginTop: "-15px" }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ marginRight: "7vw" }}>
          <Nav.Link style={{ fontSize: "25px", fontWeight: "500" }} href="/Gigbee#home" className="me-5 text-dark">Home</Nav.Link>
          <Nav.Link style={{ fontSize: "25px", fontWeight: "500" }} href="/Gigbee#about" className="me-5 text-dark">About</Nav.Link>
          <Nav.Link style={{ fontSize: "25px", fontWeight: "500" }} href="/Gigbee#offerings" className='text-dark'>Offerings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default Navigationbar;
