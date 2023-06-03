import React from "react";
import "../projects/projects.css";
import PROJECT_1 from "./project1/project1";
import PROJECT_2 from "./project2/project2";
import PROJECT_3 from "./project3/project3";
import PORTFOLIO from "./portfolio/portfolio";
import PROJECT_4 from "./project4/project4";

function PROJECTS_PAGE() {
  return (
    <div className="project-main-div" id="projects-section">
      <div className="title-div">
        <div className="project-title-1">PROJECTS</div>
      </div>
      <PROJECT_1 />
      <PROJECT_2 />
      <PROJECT_3 />
      <PROJECT_4 />
      <PORTFOLIO />
    </div>
  );
}

export default PROJECTS_PAGE;
