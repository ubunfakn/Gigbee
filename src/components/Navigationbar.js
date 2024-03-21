import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/NavigationBar.css';
import GigBeeLogo from '../assets/GigBeeLogo.png'
import { useNavigate, Link } from 'react-router-dom';

const Navigationbar = ({ navigateToSection }) => {
  const navigation = useNavigate();
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Navbar.Brand href="/Gigbee#home" className='mr-auto' style={{ marginLeft: "7vw", display: "flex" }}><img id='brandLogo' style={{ width: "90px" }} src={GigBeeLogo} alt='GigBee Logo' /><h1 id='brandName'>The Gig Bee</h1></Navbar.Brand>
      <Navbar.Toggle id='nav-toggle-button' aria-controls="basic-navbar-nav" style={{ marginRight: "5vw", marginTop: "-15px" }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ marginRight: "7vw" }}>
          <Nav.Link style={{ fontSize: "25px", fontWeight: "600", fontFamily:"fantasy" }} href="/Gigbee#home" className="me-4 text-dark navLink">Home</Nav.Link>
          <Nav.Link style={{ fontSize: "25px", fontWeight: "600", fontFamily:"fantasy" }} href="/Gigbee#about" className="me-4 text-dark navLink">About</Nav.Link>
          <Nav.Link style={{ fontSize: "25px", fontWeight: "600", fontFamily:"fantasy" }} href="/contact" className="me-4 text-dark navLink">Contact us</Nav.Link>
          <Button
            variant="outline-success"
            className="rounded-pill button_button"
            style={{
              fontSize: "15px", // Adjust font size
              minWidth: "80px", // Set minimum width
              minHeight: "20px", // Set minimum height
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={()=>navigation("/individual")}
          >
            I'm Individual
          </Button>
          <Button
            variant="dark"
            className="rounded-pill button_button"
            style={{
              fontSize: "15px", // Adjust font size
              minWidth: "80px", // Set minimum width
              minHeight: "20px", // Set minimum height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft:"25px"
            }}
            onClick={()=>navigation("/business")}
            id='businessButton'
          >
            I'm Business entity
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default Navigationbar;
