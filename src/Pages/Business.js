import React from 'react';
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


export default function Business() {
    return (
        <div>
            <div id='businessContentTop'>
                <div className="overlayB"></div>
                <div id="headingForBusiness">
                    <div>
                        <h1 style={{ fontSize: "80px", fontWeight: "900", marginTop: "310px", fontFamily: "fantasy" }}>Explore TheGigBee for Your Business</h1>
                        <h1 style={{ fontSize: "55px", marginTop: "90px", fontWeight: "normal" }}>Tailored Opportunities for Every Industry</h1>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ width: "75%" }}>
                                <h1 style={{ fontSize: "45px", marginTop: "90px", fontWeight: "normal", textAlign: "center" }}>At TheGigBee, we recognize that businesses across different sectors have unique needs and objectives. Whether you're a tech-driven startup, an established enterprise, or an industry leader, we've designed opportunities that align with your business goals and challenges.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="businessOfferings">
                <div className="overlayBG"></div>
                <div className="offeringBoxes" style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"160px"}}>
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
                <div className="offeringBoxes" style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"40px"}}>
                    <div className="offeringBox">
                        <img src={sixthImage} alt="" />
                        <h1 className="offeringBoxText">Customer Support</h1>
                    </div>
                    <div className="largeBox">
                        {/* <img src={seventhImage} alt="" /> */}
                        <h1 style={{fontSize:"90px", color:"black", fontWeight:"800"}}>OUR SERVICES</h1>
                        <h1 style={{fontWeight:"600", color:"black", fontSize:"30px"}}>"Elevate, Innovate, Dominate: Your Business, Our Expertise!"</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={seventhImage} alt="" />
                        <h1 className="offeringBoxText">Logistic Services</h1>
                    </div>
                </div>
                <div className="offeringBoxes" style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"40px"}}>
                    <div className="offeringBox">
                        <img src={eightImage} alt="" />
                        <h1 className="offeringBoxText">B2B & B2C Onboarding</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={ninthImage} alt="" />
                        <h1 className="offeringBoxText">Customer Acquisition</h1>
                    </div>
                    <div className="offeringBox">
                        <img src={tenthImage} alt="" />
                        <h1 className="offeringBoxText">Audits and Survey</h1>
                    </div>
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
                    <h1 style={{fontSize:"70px", paddingTop:"150px", fontWeight:"700", fontFamily:"fantasy"}}>Why Choose TheGigBee for Your Business?</h1>
                    <div className='businessContentTextBox'>
                        <div style={{display:"flex", justifyContent:"center"}}><h1 style={{fontWeight:"600", fontSize:"50px", color:"white"}}>Industry-Tailored Solutions</h1></div>
                        <div style={{padding:"50px", width:"98%"}}>
                            <ul>
                                <li style={{color:"white"}}>
                                    <h2 style={{textAlign:"justify"}}>Access a diverse pool of skilled professionals spanning various domains relevant to your industry.</h2>
                                </li>
                                <li style={{color:"white", paddingTop:"50px"}}>
                                    <h2 style={{textAlign:"justify"}}>From marketing strategies to research projects, content creation, surveys, mystery audits, background verification, and web development, find taskers with expertise tailored to your business.</h2>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1 style={{fontSize:"70px", paddingTop:"150px", fontWeight:"700", fontFamily:"fantasy"}}>Why Choose TheGigBee for Your Business?</h1>
                    <div className='businessContentTextBox'>
                        <div style={{display:"flex", justifyContent:"center"}}><h1 style={{fontWeight:"600", fontSize:"50px", color:"white"}}>Flexibility to Scale</h1></div>
                        <div style={{padding:"50px", width:"98%"}}>
                            <ul>
                                <li style={{color:"white"}}>
                                    <h2 style={{textAlign:"justify"}}>Customize your projects to meet specific business needs. TheGigBee offers the flexibility to scale your operations seamlessly.</h2>
                                </li>
                                <li style={{color:"white", paddingTop:"50px"}}>
                                    <h2 style={{textAlign:"justify"}}>Whether you're looking for short-term assistance or long-term collaborations, adapt your workforce based on project demands.</h2>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1 style={{fontSize:"70px", paddingTop:"150px", fontWeight:"700", fontFamily:"fantasy"}}>Why Choose TheGigBee for Your Business?</h1>
                    <div className='businessContentTextBox'>
                        <div style={{display:"flex", justifyContent:"center"}}><h1 style={{fontWeight:"600", fontSize:"50px", color:"white"}}>Efficient Project Management</h1></div>
                        <div style={{padding:"50px", width:"98%"}}>
                            <ul>
                                <li style={{color:"white"}}>
                                    <h2 style={{textAlign:"justify"}}>Streamline your project management with our intuitive platform. Create detailed project briefs, set milestones, and monitor progress effortlessly.</h2>
                                </li>
                                <li style={{color:"white", paddingTop:"50px"}}>
                                    <h2 style={{textAlign:"justify"}}>Save time and costs associated with traditional hiring processes, as TheGigBee takes care of the logistics for you.</h2>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1 style={{fontSize:"70px", paddingTop:"150px", fontWeight:"700", fontFamily:"fantasy"}}>Why Choose TheGigBee for Your Business?</h1>
                    <div className='businessContentTextBox'>
                        <div style={{display:"flex", justifyContent:"center"}}><h1 style={{fontWeight:"600", fontSize:"50px", color:"white"}}>Transparent Communication</h1></div>
                        <div style={{padding:"50px", width:"98%"}}>
                            <ul>
                                <li style={{color:"white"}}>
                                    <h2 style={{textAlign:"justify"}}>Communicate directly with skilled taskers using our built-in messaging system. Foster clear and transparent communication throughout the project lifecycle.</h2>
                                </li>
                                <li style={{color:"white", paddingTop:"50px"}}>
                                    <h2 style={{textAlign:"justify"}}>Receive real-time updates on project milestones, ensuring that you have complete visibility into the progress of your campaigns.</h2>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1 style={{fontSize:"70px", paddingTop:"150px", fontWeight:"700", fontFamily:"fantasy"}}>Why Choose TheGigBee for Your Business?</h1>
                    <div className='businessContentTextBox' style={{marginBottom:"100px"}}>
                        <div style={{display:"flex", justifyContent:"center"}}><h1 style={{fontWeight:"600", fontSize:"50px", color:"white"}}>Risk Mitigation</h1></div>
                        <div style={{padding:"50px", width:"98%"}}>
                            <ul>
                                <li style={{color:"white"}}>
                                    <h2 style={{textAlign:"justify"}}>Benefit from secure and transparent transactions. Pay only for completed and satisfactory work, reducing the risk of financial disputes.</h2>
                                </li>
                                <li style={{color:"white", paddingTop:"50px"}}>
                                    <h2 style={{textAlign:"justify"}}>Make informed decisions by leveraging our rating and review system to choose taskers with proven expertise and reliability.</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
