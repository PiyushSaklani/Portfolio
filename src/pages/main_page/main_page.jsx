import React, { useState, useEffect, useRef } from "react";
import "../main_page/main_page.css";
import MENU from "../../components/menu/menu";
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
  };
  const scrollToLanding = () => {
    const landingSection = document.getElementById("landing-section");
    landingSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills-section");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {showMenu && <MENU menu_closeBtn={handle_menu_close_btn} />}
      {!showMenu && (
        <div className="main-P-outer-div">
          <div className="main-P-appbar">
            <div className="main-P-name">P.Saklani_</div>
            <div className="main-P-menu-btn" onClick={handle_menu_open_btn}></div>
            <ul className="main-P-nav-list">
              <li id="main-P-nav-item" onClick={scrollToLanding}>Home</li>
              <li id="main-P-nav-item" onClick={scrollToAbout}>About</li>
              <li id="main-P-nav-item" onClick={scrollToProjects}>Projects</li>
              <li id="main-P-nav-item" onClick={scrollToSkills}>Skill</li>
              <li id="main-P-nav-item" onClick={scrollToContact} >Resume</li>
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
      )}
    </>
  );
}

export default MAIN_PAGE;
