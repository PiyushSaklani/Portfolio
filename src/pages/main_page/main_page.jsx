import React, { useState, useEffect, useRef } from "react";
import "../main_page/main_page.css";
import PROJECTS_PAGE from "../../components/projects/projects";
import LANDING_PAGE from "../../components/landing/landing";
import SKILLS from "../../components/skills/skills";
import CONTACT from "../../components/contact/contact";
import ABOUT from "../../components/about/about";

function MAIN_PAGE() {
  const [showMenu, setShowMenu] = useState(false);

  const handle_menu_open_btn = () => {
    setShowMenu(true);
  };

  const handle_menu_close_btn = () => {
    setShowMenu(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };
  const scrollToLanding = () => {
    const landingSection = document.getElementById("landing-section");
    landingSection.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills-section");
    skillsSection.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };

  return (
    <>
      <div className="main-P-outer-div">
        {showMenu && (<div className="floating-main-menu-items">
          <ul>
            <li className="close-btn">
            <div className="menu-close-btn" onClick={handle_menu_close_btn}></div>
            </li>
            <li onClick={scrollToLanding}>Home</li>
            <li onClick={scrollToSkills}>Skills</li>
            <li onClick={scrollToProjects}>Projects</li>
            <li onClick={scrollToAbout}>About Me</li>
            <li onClick={scrollToContact}>Resume</li>
            <li onClick={scrollToContact}>Contact</li>
          </ul>
        </div>)}
        <div className="main-P-appbar">
          <div className="main-P-name">P.Saklani_</div>
          {!showMenu && (
          <div className="main-P-menu-btn" onClick={handle_menu_open_btn}></div>
        )}
          <ul className="main-P-nav-list">
            <li id="main-P-nav-item" onClick={scrollToLanding}>
              Home
            </li>
            <li id="main-P-nav-item" onClick={scrollToSkills}>
              Skills
            </li>
            <li id="main-P-nav-item" onClick={scrollToProjects}>
              Projects
            </li>
            <li id="main-P-nav-item" onClick={scrollToAbout}>
              About Me
            </li>
            <li id="main-P-nav-item" onClick={scrollToContact}>
              Resume
            </li>
            <li id="main-P-nav-item">
              <button onClick={scrollToContact}>Contact</button>
            </li>
          </ul>
        </div>
        <div className="main-P-inner-div">
          <LANDING_PAGE />
          <SKILLS />
          <PROJECTS_PAGE />
          <ABOUT />
          <CONTACT />
        </div>
      </div>
    </>
  );
}

export default MAIN_PAGE;
