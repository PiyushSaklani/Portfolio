import React, { useState } from "react";
import "../landing/landing.css";
import "../landing/name_animation.css";

function LANDING_PAGE() {
  const [isHovered, setIsHovered] = useState(false);
  const [location, setLocation] = useState({
    el1:{t:25,l:85},
    el2:{t:88,l:90},
    el3:{t:25,l:3},
    el4:{t:55,l:6},
    el5:{t:18,l:51},
  })

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    setLocation((prevState) => ({
      el1: {
        t: 25 + clientX / 1000,
        l: 85 + clientY / 1000,
      },
      el2: {
        t: 85 + clientX / 1000,
        l: 80 + clientY / 1000,
      },
      el3: {
        t: 25 + clientX / 1000,
        l: 3 + clientY / 1000,
      },
      el4: {
        t: 55 + clientY / 1000,
        l: 6 + clientX / 1000,
      },
      el5: {
        t: 18 + clientY / 1000,
        l: 51 + clientX / 1000,
      },
    }));
  };

  return (
    <div className={`landing-main-div ${isHovered ? "name-hovered" : ""}`}
    onMouseMove={handleMouseMove} id="landing-section"
    >
      <div className="landing-text">
        <div className="landing-greeting">Hello I'm</div>
        <div
          className="landing-name"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Piyush Saklani
        </div>
        <div className="landing-intro">
          Motivated individual with a strong interest in web and app
          development. Eager to learn and grow in the field while contributing
          to a team's success.
        </div>
      </div>
      <div className="landing-pic">
        {/* <div className="landing-svg-element"></div> */}
        <div className="landing-svg-me"></div>
      </div>
      <div className="landing-element-2" id="element" style={{left:`${location.el2.l}%`, top:`${location.el2.t}%`}}></div>
      <div className="landing-element-3" id="element" style={{left:`${location.el3.l}%`, top:`${location.el3.t}%`}}></div>
      <div className="landing-element-1" id="element" style={{left:`${location.el1.l}%`, top:`${location.el1.t}%`}}></div>
      <div className="landing-element-4" id="element" style={{left:`${location.el4.l}%`, top:`${location.el4.t}%`}}></div>
      <div className="landing-element-5" id="element" style={{left:`${location.el5.l}%`, top:`${location.el5.t}%`}}></div>
      <div className="landing-element-6" id="element"></div>
      <div className="landing-element-7" id="element"></div>
    </div>
  );
}

export default LANDING_PAGE;
