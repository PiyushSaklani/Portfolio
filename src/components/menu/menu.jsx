import React from "react";
import "../menu/menu.css";

function MENU(props) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section)
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="menu-main-div">
      <div className="menu-appbar">
        <div className="menu-close-btn" onClick={props.menu_closeBtn}></div>
      </div>
      <ul className="menu-dev-list">
        <li id="menu-item" onClick={() => scrollToSection("landing-section")}>
          Home
        </li>
        <li id="menu-item" onClick={() => scrollToSection("about-section")}>
          About
        </li>
        <li id="menu-item" onClick={() => scrollToSection("projects-section")}>
          Projects
        </li>
        <li id="menu-item" onClick={() => scrollToSection("skills-section")}>
          Skill
        </li>
        <li id="menu-item" onClick={() => scrollToSection("contact-section")}>
          Resume
        </li>
        <li id="menu-item" onClick={() => scrollToSection("contact-section")}>
          Contact
        </li>
      </ul>
    </div>
  );
}

export default MENU;
