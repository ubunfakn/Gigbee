import React, { useState } from 'react';
import '../CSS/Business.css';
import firstImage from '../assets/Untitled design/1.png';
import secondImage from '../assets/Untitled design/2.png';
import thirdImage from '../assets/Untitled design/3.png';
import fourthImage from '../assets/Untitled design/4.png';
import fifthImage from '../assets/Untitled design/5.png';
import sixthImage from '../assets/Untitled design/6.png';
import seventhImage from '../assets/Untitled design/7.png';
import eightImage from '../assets/Untitled design/8.png';
import ninthImage from '../assets/Untitled design/9.png';
import tenthImage from '../assets/Untitled design/10.png';
import eleventhImage from '../assets/Untitled design/11.png';
import twelvthImage from '../assets/Untitled design/12.png';
import '../CSS/Form.css'
import { useLocation } from 'react-router-dom'
import { Form, Button, Carousel } from 'react-bootstrap';
import { Country, State, City } from 'country-state-city';


export default function Business() {
    const location = useLocation();
    const type = location.state;

    const [selectedState, setSelectedState] = useState();
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    const states = State.getStatesOfCountry("IN");

    const handleStateChange = (e) => {
        setSelectedState(State.getStateByCodeAndCountry(e.target.value, "IN"));
        setCities(City.getCitiesOfState("IN", e.target.value));
    }

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    }

    const content = [
        {
            title: "Industry-Tailored Solutions",
            description: [
                "Access a diverse pool of skilled professionals spanning various domains relevant to your industry.",
                "From marketing strategies to research projects, content creation, surveys, mystery audits, background verification, and web development, find taskers with expertise tailored to your business."
            ]
        },
        {
            title: "Flexibility to Scale",
            description: [
                "Customize your projects to meet specific business needs. TheGigBee offers the flexibility to scale your operations seamlessly.",
                "Whether you're looking for short-term assistance or long-term collaborations, adapt your workforce based on project demands."
            ]
        },
        {
            title: "Efficient Project Management",
            description: [
                "Streamline your project management with our intuitive platform. Create detailed project briefs, set milestones, and monitor progress effortlessly.",
                "Save time and costs associated with traditional hiring processes, as TheGigBee takes care of the logistics for you."
            ]
        },
        {
            title: "Transparent Communication",
            description: [
                "Communicate directly with skilled taskers using our built-in messaging system. Foster clear and transparent communication throughout the project lifecycle.",
                "Receive real-time updates on project milestones, ensuring that you have complete visibility into the progress of your campaigns."
            ]
        },
        {
            title: "Risk Mitigation",
            description: [
                "Benefit from secure and transparent transactions. Pay only for completed and satisfactory work, reducing the risk of financial disputes.",
                "Make informed decisions by leveraging our rating and review system to choose taskers with proven expertise and reliability."
            ]
        }
    ];

    return (
        <div>
            <div id='businessContentTop'>
                <div className="overlayB"></div>
                <div id="headingForBusiness">
                    <div>
                        <h1 id='individualContentOne' style={{ fontSize: "80px", fontWeight: "900", marginTop: "310px", fontFamily: "fantasy" }}>Explore TheGigBee for Your Business</h1>
                        <h1 id='individualContentTwo' style={{ fontSize: "55px", marginTop: "90px", fontWeight: "normal" }}>Tailored Opportunities for Every Industry</h1>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ width: "85%" }}>
                                <h1 id='individualContentThree' style={{ fontSize: "45px", marginTop: "90px", fontWeight: "normal", textAlign: "center", paddingBottom: "40px" }}>At TheGigBee, we recognize that businesses across different sectors have unique needs and objectives. Whether you're a tech-driven startup, an established enterprise, or an industry leader, we've designed opportunities that align with your business goals and challenges.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="businessOfferings">
                <div className="overlayBG"></div>
                <div className="offeringBoxes" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "160px" }}>
                    <div className="offeringBox">
                        <img src={firstImage} alt="" />
                        <h1 className="offeringBoxText">Influencer Marketing</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={secondImage} alt="" />
                        <h1 className="offeringBoxText">Digital Marketing</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={thirdImage} alt="" />
                        <h1 className="offeringBoxText">Marketplace Management</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={fourthImage} alt="" />
                        <h1 className="offeringBoxText">Web & App Development</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={fifthImage} alt="" />
                        <h1 className="offeringBoxText">Content Writing</h1>
                    </div>
                </div>
                <div className="offeringBoxes" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "40px" }}>
                    <div className="offeringBox">
                        <img src={sixthImage} alt="" />
                        <h1 className="offeringBoxText">Customer Support</h1>
                    </div>
                    <div className="largeBox">
                        {/* <img src={seventhImage} alt="" /> */}
                        <h1 id='firstH1OfLargeBox' style={{ fontSize: "90px", color: "white", fontWeight: "800" }}>OUR SERVICES</h1>
                        <h1 id='secondH1OfLargeBox' style={{ fontWeight: "600", color: "white", fontSize: "30px" }}>"Elevate, Innovate, Dominate: Your Business, Our Expertise!"</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={seventhImage} alt="" />
                        <h1 className="offeringBoxText">Logistic Services</h1>
                    </div>
                </div>
                <div className="offeringBoxes" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "40px" }}>
                    <div className="offeringBox" style={{ marginBottom: "140px" }}>
                        <img src={eightImage} alt="" />
                        <h1 className="offeringBoxText">B2B & B2C Onboarding</h1>
                    </div>
                    <div className="offeringBox" style={{ marginBottom: "140px" }}>
                        <img src={ninthImage} alt="" />
                        <h1 className="offeringBoxText">Customer Acquisition</h1>
                    </div>
                    <div className="offeringBox" style={{ marginBottom: "140px" }}>
                        <img src={tenthImage} alt="" />
                        <h1 className="offeringBoxText">Audits and Survey</h1>
                    </div>
                    <div className="offeringBox" style={{ marginBottom: "140px" }}>
                        <img src={eleventhImage} alt="" />
                        <h1 className="offeringBoxText">Data Mining</h1>
                    </div>
                    <div className="offeringBox" style={{ marginBottom: "140px" }}>
                        <img src={twelvthImage} alt="" />
                        <h1 className="offeringBoxText">Corporate Events</h1>
                    </div>
                </div>

                <div className="OfferingBoxesForMobile">
                    <div className="largeBox">
                        {/* <img src={seventhImage} alt="" /> */}
                        <h1 id='firstH1OfLargeBox' style={{ fontSize: "90px", color: "white", fontWeight: "800" }}>OUR SERVICES</h1>
                        <h1 id='secondH1OfLargeBox' style={{ fontWeight: "600", color: "white", fontSize: "30px" }}>"Elevate, Innovate, Dominate: Your Business, Our Expertise!"</h1>
                    </div>
                </div>

                <div className="OfferingBoxesForMobile">
                    <div className="offeringBox">
                        <img src={firstImage} alt="" />
                        <h1 className="offeringBoxText">Influencer Marketing</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={secondImage} alt="" />
                        <h1 className="offeringBoxText">Digital Marketing</h1>
                    </div>
                </div>

                <div className="OfferingBoxesForMobile">
                    <div className="offeringBox">
                        <img src={thirdImage} alt="" />
                        <h1 className="offeringBoxText">Marketplace Management</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={fourthImage} alt="" />
                        <h1 className="offeringBoxText">Web & App Development</h1>
                    </div>
                </div>

                <div className="OfferingBoxesForMobile">
                    <div className="offeringBox">
                        <img src={fifthImage} alt="" />
                        <h1 className="offeringBoxText">Content Writing</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={sixthImage} alt="" />
                        <h1 className="offeringBoxText">Customer Support</h1>
                    </div>
                </div>

                <div className="OfferingBoxesForMobile">
                    <div className="offeringBox">
                        <img src={seventhImage} alt="" />
                        <h1 className="offeringBoxText">Logistic Services</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={eightImage} alt="" />
                        <h1 className="offeringBoxText">B2B & B2C Onboarding</h1>
                    </div>
                </div>

                <div className="OfferingBoxesForMobile">
                    <div className="offeringBox">
                        <img src={ninthImage} alt="" />
                        <h1 className="offeringBoxText">Customer Acquisition</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={tenthImage} alt="" />
                        <h1 className="offeringBoxText">Audits and Survey</h1>
                    </div>
                </div>

                <div className="OfferingBoxesForMobile" style={{ paddingBottom: "80px" }}>
                    <div className="offeringBox">
                        <img src={eleventhImage} alt="" />
                        <h1 className="offeringBoxText">Data Mining</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={twelvthImage} alt="" />
                        <h1 className="offeringBoxText">Corporate Events</h1>
                    </div>
                </div>
            </div>
            <div id="businessContent">
                <div className="overlayBO"></div>
                <div id="businessContentPart">
                    <h1 style={{ fontSize: "70px", paddingTop: "150px", fontWeight: "700", fontFamily: "fantasy" }}>Why Choose TheGigBee for Your Business?</h1>
                    <Carousel prevIcon={<span style={{ fontSize: "2vw" }}>&lt;</span>} nextIcon={<span style={{ fontSize: "2vw" }}>&gt;</span>} pause={false}>
                        {content.map((item, index) => (
                            <Carousel.Item id='carouselItem' style={{ marginLeft: "25vw", marginBottom: "100px" }} key={index}>
                                <div className='businessContentTextBox'>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <h2 className='carouselTitle' style={{ fontWeight: "600", fontSize: "40px", color: "white" }}>{item.title}</h2>
                                    </div>
                                    <div style={{ padding: "50px", width: "98%" }}>
                                        <ul>
                                            {item.description.map((text, i) => (
                                                <li key={i} style={{ color: "white", paddingTop: i === 1 ? "50px" : "0" }}>
                                                    <h2 style={{ textAlign: "justify" }}>{text}</h2>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div id='formPage'>
                <div className="overlayForm"></div>
                <div id='text_section' style={{ width: "50%", paddingLeft: "5%" }}>
                    <div id="leftSideContent" style={{ width: "98%" }}>
                        <h1 style={{ fontSize: "60px", fontWeight: "600", paddingTop: "150px" }}>Let's Shape the Future Together!</h1>
                        <>
                            <h6 style={{ fontSize: "30px", paddingLeft: "30px", width: "95%", paddingTop: "40px" }}>
                                TheGigBee is not just a platform; it's your partner in corporate success. Together, let's embark on a journey where your business goals meet unparalleled opportunities.
                            </h6>
                        </>
                    </div>
                </div>
                <div id='form_section' style={{ width: "48%", marginBottom:"100px" }}>
                    <div className="main_form">
                        <Form style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: '20px', borderRadius: '35px', marginBottom: "50px" }}>
                            <h1 style={{ fontSize: "45px", fontWeight: "600", color: "darkblue", paddingTop: "25px", paddingBottom: "25px", textAlign: "center" }}>Join Us Now!</h1>
                            {/* <Form.Group controlId="gen">
                            <Form.Control value={type} style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }}  type="text" placeholder="" readOnly />
                        </Form.Group> */}
                            <Form.Group controlId="formName">
                                {/* <Form.Label style={{fontSize:"25px"}}>Name</Form.Label> */}
                                <Form.Control style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} type="text" placeholder="Enter your business name" />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                {/* <Form.Label style={{fontSize:"25px", marginTop:"40px"}}>Email</Form.Label> */}
                                <Form.Control style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} type="email" placeholder="Enter your official email" />
                            </Form.Group>

                            <Form.Group controlId="formPhone">
                                {/* <Form.Label>Phone Number</Form.Label> */}
                                <Form.Control style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} type="tel" placeholder="Enter your phone number" />
                            </Form.Group>

                            <Form.Group controlId="formAddress">
                                {/* <Form.Label>Address with Country</Form.Label> */}
                                <Form.Control style={{ borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} as="textarea" rows={4} placeholder="Enter address" />
                            </Form.Group>

                            <Form.Group controlId="formState">
                                <Form.Control style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} as="select" onChange={handleStateChange}>
                                    <option value="">{selectedState ? selectedState.name : "Select State"}</option>
                                    {states.map((state) => (
                                        <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            {selectedState && (
                                <Form.Group controlId="formCity">
                                    <Form.Control style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} as="select" onChange={handleCityChange} value={selectedCity}>
                                        <option value="">Select City</option>
                                        {cities.map((city, index) => (
                                            <option key={index} value={city.name}>{city.name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            )}

                            <Form.Group controlId="formDetails">
                                {/* <Form.Label>Details</Form.Label> */}
                                <Form.Control style={{ borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} as="textarea" rows={6} placeholder="Write your requirements" />
                            </Form.Group>

                            <Button style={{ marginTop: "40px" }} variant="primary" type="submit">
                                Submit Details
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
