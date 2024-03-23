import React from "react";
import java from "./img/java.jpeg";
import "./About.css";
import PersonalAbout from "./personalAbout/PersonalAbout";
import SubheaderImg from "./SubheaderImg";
function About() {
  return (
    <div className="about-area">
      <SubheaderImg img={java} />
      <PersonalAbout />
    </div>
  );
}

export default About;
