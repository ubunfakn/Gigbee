import React from 'react'
import '../CSS/Individual.css'
import { useNavigate } from 'react-router-dom'

export default function Individual() {

    const navigation = useNavigate();
    return (
        <div>
            <div id='individualContent'>
                <div className="overlayI"></div>
                <div id="headingForIndividual">
                    <div>
                        <h1 style={{ fontSize: "80px", fontWeight: "900", marginTop: "310px", fontFamily: "fantasy" }}>Explore TheGigBee as an Individual</h1>
                        <h1 style={{ fontSize: "55px", marginTop: "90px", fontWeight: "normal" }}>Tailored Opportunities for Every Generation</h1>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ width: "75%" }}>
                                <h1 style={{ fontSize: "45px", marginTop: "90px", fontWeight: "normal", textAlign: "center" }}>At TheGigBee, we understand that individuals of different generations have unique talents and aspirations. Whether you're a tech-savvy Gen Z, an ambitious Millennial, or a seasoned Gen X professional, we have crafted opportunities that align with your skills and passions.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='genTypes'>
                <div className="overlayIG"></div>
                <div id='genTypesContent' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div onClick={() => navigation("/form", { state: "GenZ" })} className='typeBoxes' style={{cursor:"pointer"}}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "35px" }}>
                            <div id="genHeading">
                                <h3 style={{ fontWeight: "600" }}>For Gen Z:</h3>
                                <h3 style={{ fontWeight: "600" }}>Embrace Digital Freedom</h3>
                            </div>
                        </div>
                        <div id='genZMainContent' style={{ display: "flex", marginLeft: "20px", marginTop: "20px", flexDirection: "column", justifyContent: "left", alignItems: "flex-start", width: "90%" }}>
                            <h4 style={{ fontWeight: "600" }}>Digital Natives, Rejoice!</h4>
                            <h4 style={{ fontWeight: "400", marginRight: "20px", textAlign: "justify", marginTop: "10px" }}>Gen Z, Dive into TheGigBee – where your unparalleled digital skills find a home. Explore gigs aligning with your passion for technology, creativity, and innovation. Let your skills shine, embracing projects resonating with your generation's values.</h4>
                            <h4 style={{ fontWeight: "600", marginTop: "25px" }}>Why Choose TheGigBee?</h4>
                            <ul>
                                <li style={{ textAlign: "justify", fontSize: "18px" }}>Digital-first Gigs: Engage in tech-savvy projects.</li>
                                <li style={{ textAlign: "justify", fontSize: "18px" }}>Flexible Work: Align projects with your interests and enjoy a digital lifestyle.</li>
                                <li style={{ textAlign: "justify", fontSize: "18px" }}>Community Collaboration: Connect with like-minded Gen Z individuals.</li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={() => navigation("/form", { state: "Millennials" })} className='typeBoxes' style={{ marginLeft: "50px", cursor:"pointer" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "35px" }}>
                            <div id="genHeading">
                                <h3 style={{ fontWeight: "600" }}>For Millennials:</h3>
                                <h3 style={{ fontWeight: "600" }}>Navigate  Professional Journey</h3>
                            </div>
                        </div>
                        <div id='genZMainContent' style={{ display: "flex", marginLeft: "20px", marginTop: "20px", flexDirection: "column", justifyContent: "left", alignItems: "flex-start", width: "90%" }}>
                            <h4 style={{ fontWeight: "600" }}>Ambitious Minds, Seize Your Moment!</h4>
                            <h4 style={{ fontWeight: "400", marginRight: "20px", textAlign: "justify", marginTop: "10px" }}>Fuel your ambition with TheGigBee. We offer tailored gigs for your diverse skill set and entrepreneurial spirit. Find opportunities aligned with your goals.</h4>
                            <h4 style={{ fontWeight: "600", marginTop: "25px" }}>Why Choose TheGigBee?</h4>
                            <ul>
                                <li style={{ textAlign: "justify", fontSize: "18px" }}>Entrepreneurial Gigs: Explore projects for creative expression.</li>
                                <li style={{ textAlign: "justify", fontSize: "18px" }}>Career Growth: Access gigs for professional development.</li>
                                <li style={{ textAlign: "justify", fontSize: "18px" }}>Networking Opportunities: Connect for expanded opportunities.</li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={() => navigation("/form", { state: "GenX" })} className='typeBoxes' style={{ marginLeft: "50px", cursor:"pointer" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "35px" }}>
                            <div id="genHeading">
                                <h3 style={{ fontWeight: "600" }}>For Gen X:</h3>
                                <h3 style={{ fontWeight: "600" }}>Leverage Your Expertise</h3>
                            </div>
                        </div>
                        <div id='genZMainContent' style={{ display: "flex", marginLeft: "20px", marginTop: "20px", flexDirection: "column", justifyContent: "left", alignItems: "flex-start", width: "90%" }}>
                            <h4 style={{ fontWeight: "600" }}>Seasoned Professionals, Your Experience Matters!</h4>
                            <h4 style={{ fontWeight: "400", marginRight: "20px", textAlign: "justify", marginTop: "10px" }}>Maximize your impact at TheGigBee. Leverage your expertise in projects matching your professional background. Enjoy flexible work arrangements and impactful mentorship opportunities.</h4>
                            <h4 style={{ fontWeight: "600", marginTop: "25px" }}>Why Choose TheGigBee?</h4>
                            <ul>
                                <li style={{ textAlign: "justify", fontSize: "18px" }}>Industry-Relevant Gigs: Leverage your years of expertise.</li>
                                <li style={{ textAlign: "justify", fontSize: "18px" }}>Flexible Work Arrangements: Accommodate your lifestyle while utilizing your professional experience.</li>
                                <li style={{ textAlign: "justify", fontSize: "18px" }}>Engage in a community valuing mentorship.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
