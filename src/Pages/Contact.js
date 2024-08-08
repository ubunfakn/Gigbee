import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Country, State, City } from 'country-state-city';
import '../CSS/Form.css'

export default function Contact() {
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
    return (
        <div id='formPage' style={{ display: "flex", justifyContent: "center" }}>
            <div className="overlayForm"></div>
            <div id='form_section' style={{ width: "48%", marginBottom:"100px", marginTop:"80px" }}>
                <div className="main_form">
                    <Form style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: '20px', borderRadius: '35px', marginBottom: "50px" }}>
                        <h1 style={{ fontSize: "45px", fontWeight: "600", color: "darkblue", paddingTop: "25px", paddingBottom: "25px", textAlign: "center" }}>Contact Us!</h1>
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
    )
}
