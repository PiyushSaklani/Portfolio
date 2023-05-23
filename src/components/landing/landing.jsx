import React from "react";
import "../landing/landing.css";

function Landing() {
  return (
    <div className="landing-main-div">
      <div className="landing-text">
        <div className="landing-greeting">Hello I'm</div>
        <div className="landing-name">Piyush Saklani</div>
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
    </div>
  );
}

export default Landing;
