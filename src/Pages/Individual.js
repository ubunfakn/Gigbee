import React from 'react'
import '../CSS/Individual.css'

export default function Individual() {
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
                    <div className='typeBoxes'>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "35px" }}>
                            <div id="genHeading">
                                <h3 style={{ fontWeight: "600" }}>For Gen Z:</h3>
                                <h3 style={{ fontWeight: "600" }}>Embrace Digital Freedom</h3>
                            </div>
                        </div>
                        <div id='genZMainContent' style={{ display:"flex", marginLeft:"20px", marginTop:"20px", flexDirection:"column", justifyContent:"left",alignItems:"flex-start" }}>
                            <h4 style={{ fontWeight: "600" }}>Digital Natives, Rejoice!</h4>
                            <h4 style={{ fontWeight: "400", marginRight:"20px", textAlign:"justify",marginTop:"10px" }}>Gen Z, Dive into TheGigBee – where your unparalleled digital skills find a home. Explore gigs aligning with your passion for technology, creativity, and innovation. Let your skills shine, embracing projects resonating with your generation's values.</h4>
                            <h4 style={{ fontWeight: "600", marginTop:"25px" }}>Why Choose TheGigBee?</h4>
                            <ul>
                                
                            </ul>
                        </div>
                    </div>
                    <div className='typeBoxes' style={{ marginLeft: "50px" }}></div>
                    <div className='typeBoxes' style={{ marginLeft: "50px" }}></div>
                </div>
            </div>
        </div>
    )
}
