import React from "react";
import "./About.css";
import conceptImage from "../assets/images/faces.jpg";  
import distributionImg from "../assets/images/7374fe0b-5869-4adf-bbe6-79ebf9300db5-removebg-preview.png";  
import emotionImg from "../assets/images/faces.jpg";  
import teamGlenn from "../assets/images/Glenn-removebg-preview.png";  
import teamLeslie from "../assets/images/Leslie.png";  
import teamFabienne from "../assets/images/Fabienne.jpeg";  

const About = () => {
  return (
    <div className="about-page">
      
      <div className="concept-container">
        <div className="concept-text">
          <h2><strong>Concept</strong></h2>
          <p>
            Cabinet d’Artiste, a French association (under the 1905 law), was born out of a reflection during the pandemic, at a time when cultural venues were closed and outings were often limited to medical appointments.
          </p>
          <p><i>Why not bring art to the places where people still go, to health centres?</i></p>
          <p>
            Transforming the waiting rooms of doctors’ surgeries into ephemeral mini art galleries: that’s the mission that Cabinet d’Artiste has set itself. Creating a bridge between the worlds of healthcare and art, the association turns healthcare premises into spaces for artistic expression.
          </p>
        </div>
        <div className="concept-image">
          <img src={conceptImage} alt="Concept" />
        </div>
      </div>

      <div className="objectives-container">
        <h2><strong>Objectives</strong></h2>
        <div className="objectives-grid">
          <div className="objective">
            <img src={distributionImg} alt="Distribution" />
            <div className="objective-text">
              <h3><i>Distribution</i></h3>
              <p>Highlighting emerging artists by giving them a showcase in spaces accessible to all.</p>
            </div>
          </div>
          <div className="objective">
            <img src={emotionImg} alt="Emotion" />
            <div className="objective-text">
              <h3><i>Emotion</i></h3>
              <p>Surprising and soothing with works that bring color and harmony to care spaces.</p>
            </div>
          </div>
          <div className="objective">
            <div className="objective-text">
              <h3><i>Democratisation</i></h3>
              <p>Bringing art to the heart of everyday life, by transforming care facilities into cultural spaces open to all.</p>
            </div>
          </div>
          <div className="objective">

            <div className="objective-text">
              <h3><i>Mediation</i></h3>
              <p>Encouraging links between artists, carers, and patients through exhibitions that are designed and interactive.</p>
            </div>
          </div>
        </div>
      </div>

   
      <div className="team-container">
        <h2><strong>Team</strong></h2>
        <div className="team-members">
          <div className="team-member">
            <img src={teamGlenn} alt="Glenn" />
            <h4>Glenn</h4>
            <p>Founder and healthcare professional</p>
          </div>
          <div className="team-member">
            <img src={teamLeslie} alt="Leslie" />
            <h4>Leslie</h4>
            <p>Communication and project officer</p>
          </div>
          <div className="team-member">
            <img src={teamFabienne} alt="Fabienne" />
            <h4>Fabienne</h4>
            <p>Cultural mediation and production</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
