import React from "react";
import strength from "../assets/images/strength.jpg";
import mobility from "../assets/images/mobility.jpg";
import drills from "../assets/images/drills.jpg";

const HeroSection = () => {
  return (
    <div className="main__section">
      <h1>Runner's Workout</h1>
      <div className="main__container">
        <div className="main__container--content">
          <h1>Strength</h1>
          <img src={strength} id="strength" alt="drills" />
        </div>
        <div className="main__container--content">
          <h1>Mobility</h1>
          <img src={mobility} id="mobility" alt="drills" />
        </div>
        <div className="main__container--content">
          <h1>Drills</h1>
          <img src={drills} id="drills" alt="drills" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
