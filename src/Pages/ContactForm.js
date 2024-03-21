import React, { useState } from 'react'
import '../CSS/Form.css'
import { useLocation } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { Country, State, City } from 'country-state-city';

export default function ContactForm() {
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

    const handleCityChange = (e)=>{
        setSelectedCity(e.target.value);
    }
    return (
        <div id='formPage'>
            <div className="overlayForm"></div>
            <div id='text_sectionForIndividual' style={{ width: "50%", paddingLeft: "5%" }}>
                <div id="leftSideContentForIndividual" style={{ width: "98%" }}>
                    <h1 id='whatWeOffer' style={{ fontSize: "60px", fontWeight: "600" }}>What We Offer:</h1>
                    <h1 id='potential' style={{ fontSize: "55px", fontWeight: "600", paddingTop: "20px" }}>Igniting Potential, Empowering Journeys!</h1>
                    {type === "GenZ" ? <>
                        <h2 className='formGenTypeForIndividual' style={{ fontSize: "40px", fontWeight: "600", paddingTop: "60px" }}>Gen Z &nbsp;:</h2>
                        <ul style={{ paddingLeft: "70px", width: "95%" }}>
                            <li style={{ fontSize: "30px" }}>
                                <span style={{ fontWeight: "bold" }}>Entrepreneurial Mastery:</span> Dive into structured programs shaping your entrepreneurial spirit.
                            </li>
                            <li style={{ fontSize: "30px", paddingTop: "30px" }}>
                                <span style={{ fontWeight: "bold" }}>Social Media Wizardry:</span> Transform social media from a freebie into a career-enhancing powerhouse.
                            </li>
                        </ul></> : <>{type === "Millennials" ? <h2 className='formGenTypeForIndividual' style={{ fontSize: "40px", fontWeight: "600", paddingTop: "60px" }}>Millennials&nbsp;:</h2> : <h2 className='formGenTypeForIndividual' style={{ fontSize: "40px", fontWeight: "600", paddingTop: "60px" }}>Gen X &nbsp;:</h2>}
                        <ul style={{ paddingLeft: "70px", width: "95%" }}>
                            <li style={{ fontSize: "30px" }}>
                                <span style={{ fontWeight: "bold" }}>Strategic Growth:</span> Access projects aligned with your unique skills and aspirations.
                            </li>
                            <li style={{ fontSize: "30px", paddingTop: "30px" }}>
                                <span style={{ fontWeight: "bold" }}>Global Ventures:</span> Connect with our 100+ client base seeking individuals like you, spanning India to overseas.
                            </li>
                        </ul></>}
                </div>
            </div>
            <div id='form_sectionForIndividual' style={{ width: "48%" }}>
                <div className="main_formForIndividual">
                    <Form style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: '20px', borderRadius: '35px', marginBottom: "50px" }}>
                        <h1 style={{ fontSize: "45px", fontWeight: "600", color: "darkblue", paddingTop: "25px", paddingBottom: "25px", textAlign: "center" }}>Join Us Now!</h1>
                        <Form.Group controlId="gen">
                            <Form.Control value={type} style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} type="text" placeholder="" readOnly />
                        </Form.Group>
                        <Form.Group controlId="formName">
                            {/* <Form.Label style={{fontSize:"25px"}}>Name</Form.Label> */}
                            <Form.Control style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            {/* <Form.Label style={{fontSize:"25px", marginTop:"40px"}}>Email</Form.Label> */}
                            <Form.Control style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            {/* <Form.Label>Phone Number</Form.Label> */}
                            <Form.Control style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} type="tel" placeholder="Enter your phone number" />
                        </Form.Group>

                        <Form.Group controlId="formAddress">
                            {/* <Form.Label>Address with Country</Form.Label> */}
                            <Form.Control style={{ borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} as="textarea" rows={4} placeholder="Enter your address" />
                        </Form.Group>

                        <Form.Group controlId="formState">
                            <Form.Control style={{ height: "70px", borderRadius: "25px", fontSize: "20px", marginTop: "40px" }} as="select" onChange={handleStateChange}>
                                <option value="">{selectedState?selectedState.name:"Select State"}</option>
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
    )
}
