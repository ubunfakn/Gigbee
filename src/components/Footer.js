// import React from 'react'
// import '../CSS/Footer.css'
// import anotherLogo from '../assets/logo-removebg-preview.png';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//     return (
//         <div style={{ backgroundColor: "black", marginTop: "0vh" }} id='footer'>
//             <div className='d-flex' style={{ justifyContent: "center", alignItems: "center", paddingTop: "5vh" }}>
//                 <Link to="/"><img style={{ width: "190px", height: "190px", marginTop: "-9px" }} src={anotherLogo} alt="Aap tak Chhattisgarh logo" /></Link>
//             </div>
//             <div id="social_media_div" className='d-flex mt-3' style={{ justifyContent: "center", alignItems: "center" }}>
//                 <Link style={{ textDecoration: "none" }} to={"https://www.facebook.com/profile.php?id=61554438800824&sfnsn=wiwspwa&mibextid=RUbZ1f"}>
//                     <div className="social_media bg-secondary d-flex" style={{ width: "50px", height: "50px", justifyContent: "center", alignItems: "center" }}>
//                         <i className="fa-brands text-dark fa-facebook-f fa-2x"></i>
//                     </div>
//                 </Link>
//                 <div className="social_media ml-4 bg-secondary d-flex" style={{ width: "50px", height: "50px", justifyContent: "center", alignItems: "center" }}>
//                     <i className="fa-brands fa-twitter fa-2x"></i>
//                 </div>
//                 <Link style={{ textDecoration: "none" }} to={"https://www.youtube.com/@newsaaptakchhattisgarh"}>
//                     <div className="social_media ml-4 bg-secondary d-flex" style={{ width: "50px", height: "50px", justifyContent: "center", alignItems: "center" }}>
//                         <i className="fa-brands text-dark fa-youtube fa-2x"></i>
//                     </div></Link>
//                 <Link style={{ textDecoration: "none" }} to={"https://www.instagram.com/newsaaptakchhattisgarh?igsh=ajFkNGxtdHR3a3Vs"}>
//                     <div className="social_media ml-4 bg-secondary d-flex" style={{ width: "50px", height: "50px", justifyContent: "center", alignItems: "center" }}>
//                         <i className="fa-brands fa-instagram text-dark fa-2x"></i>
//                     </div></Link>
//             </div>
//             <div className="d-flex" id='footer_content' style={{ justifyContent: "center", alignItems: "center" }}>
//                 <p className='text-white mt-4 mb-5'>&copy; Copyright Aap Tak Chhattisgarh 2022 | All Rights Reserved</p>
//             </div>
//         </div>
//     )
// }

// import React from "react";
// import '../CSS/Footer.css';
// import fb from '../assets/fb.png';
// import insta from '../assets/insta.png';
// import youtube from '../assets/youtube.png';
// import twitter from '../assets/twitter.png';
// import logo from '../assets/GigBeeLogo.png';

// const Footer = () => {
//     return (
//         <div className="Footer">
//             <div className="sb_footer section_padding">

//                 <div className="sb_footer-links">
//                     <div className="sb_footer-links_div_left">
//                         <h2>Contact Us</h2>
//                         <div className="footer-link_first">
//                             <h3>For Business</h3>
//                             <p>business@kfc.com</p>
//                         </div>
//                         <div className="footer-link_second">
//                             <h3>For Careers</h3>
//                             <p>hr@kfc.com</p>
//                         </div>
//                         <div className="footer-link_third">

//                             <h3>For Queries</h3>
//                             <p>support@kfc.com</p>
//                             <p>+91 86021 85525</p>
//                         </div>

//                     </div>
//                     <div className="sb_footer-links_div_right">
//                         <img src={logo} alt="" />
//                         <div className="socialmedia">
//                             <a href="https://www.fb.com" target="_blank" rel="noopener noreferrer"><img src={fb} alt="" /></a>
//                             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
//                             <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="" /></a>
//                             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" /></a>
//                         </div>
//                     </div>

//                 </div>

//                 <hr />
//                 <div className="sb_footer-below">
//                     <div className="sb_footer-copyright">
//                         <p>
//                             Copyright &copy; {new Date().getFullYear()} Brainiacosm Alright resevered.
//                         </p>
//                     </div>
//                     {/* <div className="sb_footer-below-links">
//                         <a href="/home"><div><p>Terms & Conditions</p></div></a>
//                         <a href="/home"><div><p>Privacy</p></div></a>

//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/GigBeeLogo.png';

const Footer = () => {
    return (
        <footer className="bg-light text-dark py-5">
            <Row style={{ marginLeft: "2vw", marginRight: "2vw" }}>
                {/* Logo */}
                <Col xs={12} md={4} className="text-center d-flex align-items-start justify-content-start text-md-start mb-4">
                    <img src={logo} alt="Logo" width="200" />
                    <h1 style={{ fontSize: "1vw", marginTop: "50px" }} id='brandName'>The Gig Bee</h1>
                </Col>

                {/* Social Media Icons */}
                <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                    <div className="mb-3">
                        <h5>Follow Us</h5>
                        <div className="d-flex flex-row justify-content-center  p-5">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                            <FontAwesomeIcon style={{ paddingLeft: "35px" }} icon={faTwitter} size="2x" />
                            <FontAwesomeIcon style={{ paddingLeft: "35px" }} icon={faInstagram} size="2x" />
                        </div>
                    </div>
                </Col>

                {/* Contact Information */}
                <Col xs={12} md={4} className="text-center text-center">
                    <div className="mb-3">
                        <div className="d-flex justify-content-center">
                            <h5>Contact Us</h5>
                        </div>
                        <div className='p-4' style={{ textAlign: "center" }}>
                            <p>Business: <a href="mailto:business@example.com">business@example.com</a></p>
                            <p>Individual: <a href="mailto:individual@example.com">individual@example.com</a></p>
                            <p>Queries: <a href="mailto:queries@example.com">queries@example.com</a></p>
                            <p>Toll Free: 1-800-123-4567</p>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* Copyright */}
            <hr />
            <div className='d-flex justify-content-center mt-2'>
                <p>
                    Copyright &copy; 2022 Brainiacosm. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;


