import React from 'react';
import firstImage from '../assets/1stImage.png';
import secondImage from '../assets/2ndImage.png';
import GigBeeText from '../assets/GigbeeText.png';
import '../CSS/MainPage.css';
import IndividualImage from '../assets/individual.png'
import BusinessImage from '../assets/business.png';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigation = useNavigate();
  return (
    <>
      <div id="home">
        <div className="overlay"></div>
        <div id="contentContainer">
          <img src={firstImage} style={{ marginLeft: "80vw", marginTop: "90px", width: "200px", zIndex: "3", position: "absolute" }} alt="" />
          <div id="textContentForHome" style={{ display: "flex", justifyContent: "center" }}>
            <h1 id='welcomeText' style={{ fontSize: "90px", color: "black", fontWeight: "700", marginTop: "265px" }}>Welcome to</h1>
          </div>
          <div id="GigBeeTextForHome" style={{ display: "flex", justifyContent: "center" }}>
            <img src={GigBeeText} style={{ width: "1200px" }} alt="" />
          </div>
          <div id="subtitleForHome" style={{ display: "flex", justifyContent: "center" }}>
            <h1 id='subTitle' style={{ fontFamily: "Nunito Sans, sans-serif", marginTop: "10px", color: "black", fontWeight: "700", fontSize: "50px" }}>"Your Gig, Your Click, Your Future"</h1>
          </div>
          <img src={secondImage} style={{ marginLeft: "10vw", width: "400px", zIndex: "3" }} alt="" />
        </div>
      </div>
      <div id="about">
        <div className="overlay1"></div>
        <div className="overlay2"></div>
        <div id="textContentForAbout" style={{ paddingTop: "5%" }}>
          <h1 id='aboutHeading'>About Us</h1>
          <p id='aboutUsText'>At TheGigBee, we're passionate about fostering a community where individuals and companies can seamlessly connect, collaborate, and thrive. Our mission is to empower freelancers, social media influencers, marketing enthusiasts, and businesses of all sizes by providing a platform that bridges the gap between talent and opportunity.</p>
        </div>
        <div id="textContentForVision" style={{ marginTop: "5%" }}>
          <h1 id='visionHeading'>Our Vision</h1>
          <p id='visionText'>We envision a world where work is not confined by traditional boundaries, where talent knows no limitations, and where every project, big or small, finds the perfect match. TheGigBee is more than just a gig platform; it's a hub of creativity, innovation, and limitless possibilities.</p>
        </div>
        <div id="textContentForChoose" style={{ marginTop: "5%" }}>
          <h1 id='chooseHeading'>Why Choose The Gig Bee?</h1>
          <ul id='chooseText' style={{ paddingBottom: "5%" }}>
            <li>Diverse Opportunities: Explore a wide range of projects across various domains.</li>
            <li>Flexibility: Tailor your work to your schedule and preferences.</li>
            <li>Efficiency: For companies, find skilled taskers hassle-free, while individuals discover projects that align with their expertise.</li>
          </ul>
        </div>
      </div>
      <div id="offerings">
        <div className="overlay3"></div>
        <div id="textContentForOfferings" style={{ display: "flex", justifyContent: "center" }}>
          <h1 id='welcomeText' style={{ fontSize: "90px", color: "white", fontWeight: "700", marginTop: "105px" }}>I am</h1>
        </div>
        <div id="entitiesContentForOfferings" style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
          <div className="individual_box" onClick={()=>navigation("/individual")} style={{ cursor:"pointer", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div>
              <img src={IndividualImage} style={{ width: "250px" }} alt="" />
            </div>
            <div style={{display:"flex", textAlign:"center"}}>
              <h1 style={{ fontSize: "50px", color: "white", fontWeight: "700" }}>an individual person</h1>
            </div>
          </div>
          <div id="orOffering" style={{ marginLeft: "5%", marginTop: "6%" }}>
            <h1 id='welcomeText' style={{ fontSize: "90px", color: "white", fontWeight: "700", marginTop: "195px" }}>Or</h1>
          </div>
          <div className="business_box" style={{ cursor:"pointer",  marginLeft: "5%", marginBottom: "3%", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
            <div>
              <img src={BusinessImage} style={{ width: "250px" }} alt="" />
            </div>
            <div style={{display:"flex", textAlign:"center"}}>
              <h1 style={{ fontSize: "59px", color: "white", fontWeight: "700" }}>a business entity</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
