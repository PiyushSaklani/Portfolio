import React from "react";
import "../about/about.css";

function ABOUT() {
  return (
    <div className="about-main-div" id="about-section">
      <div className="about-main-div-1">
        <div className="about-me">
          <div className="title-1">ABOUT ME</div>
          <br />
          <div className="about-me-emj">: )</div>
          <br />
          I am currently pursuing a B.Tech in Computer Science with a
          specialization in Data Science at NIIT University in Neemrana,
          Rajasthan.
          <br />
          <br />
          In terms of programming languages, I am skilled in Python, Java, SQL,
          JavaScript, TypeScript, HTML/CSS, and R. I have worked with frameworks
          such as React, Node.js, Vue.js, Flutter, FastAPI, and Express.js. I am
          familiar with Git, Docker, Google Cloud Platform, and IDEs such as VS
          Code, PyCharm, IntelliJ, and Eclipse.
          {/* <div className="contact-flex-div1">
            <div className="contact-logo"></div>
            <a href="Resume.pdf" download>
              <div className="download">
                <div className="download-title">Resume</div>
                <div className="download-logo"></div>
              </div>
            </a>
            <div className="contact-SocialMedia">
              <a href="mailto:saklani302@gmail.com">
                <div className="contact-Mail" id="SM"></div>
              </a>

              <a
                href="https://github.com/PiyushSaklani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-GitHub" id="SM"></div>
              </a>

              <a
                href="https://www.linkedin.com/in/piyushsaklani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-Linkedin" id="SM"></div>
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="about-main-div-2">
        <div className="about-image-me"></div>
      </div>
    </div>
  );
}
export default ABOUT;
