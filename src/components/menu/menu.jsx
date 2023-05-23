import React from "react";
import "../menu/menu.css";

function MENU(props) {
  return (
    <div className="menu-main-div">
        <div className="menu-appbar">
          <div className="menu-close-btn" onClick={props.menu_closeBtn}></div>
        </div>
          <ul className="menu-dev-list">
            <li id="menu-item">Home</li>
            <li id="menu-item">About</li>
            <li id="menu-item">Skill</li>
            <li id="menu-item">Resume</li>
            <li id="menu-item">Contact</li>
          </ul>
      </div>
  );
}

export default MENU;