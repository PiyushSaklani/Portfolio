import React, { useState } from "react";
import "../landing/landing.css";
import "../landing/name_animation.css"

function Landing() {
  const [isHovered, setIsHovered] = useState(false);

  // const elements = [];

  // for (let i = 0; i < 35; i++) {
  //   elements.push(<div key={i} className={`re-${i+1}`} id="round-element"></div>);
  // }

  return (
    <div
      className={`landing-main-div ${isHovered ? "name-hovered" : ""}`}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <div className="landing-text">
        <div className="landing-greeting">Hello I'm</div>
        <div className="landing-name" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Piyush Saklani</div>
        <div className="landing-intro">
          Motivated individual with a strong interest in web and app
          development. Eager to learn and grow in the field while contributing
          to a team's success.
        </div>
      </div>
      <div className="landing-pic">
        <div className="landing-svg-element"></div>
        <div className="landing-svg-me"></div>
      </div>
      <div className="landing-element-2" id="element"></div>
      <div className="landing-element-3" id="element"></div>
      <div className="landing-element-1" id="element"></div>
      <div className="landing-element-4" id="element"></div>
      <div className="landing-element-5" id="element"></div>
      <div className="landing-element-6" id="element"></div>
      <div className="landing-element-7" id="element"></div>
    </div>
  );
}

export default Landing;


