import React from "react";
import "../projects/projects.css";
import PROJECT_1 from "./project1/project1";
import PROJECT_2 from "./project2/project2";
import PROJECT_3 from "./project3/project3";
import PORTFOLIO from "./portfolio/portfolio";
import PROJECT_4 from "./project4/project4";
import PROJECT_5 from "./project5/project5";
import PROJECT_6 from "./project6/project6";

function PROJECTS_PAGE() {
  return (
    <div className="project-main-div" id="projects-section">
      <div className="title-div">
        <div className="project-title-1">PROJECTS</div>
      </div>
      <PROJECT_1 />
      <PROJECT_2 />
      <PROJECT_4 />
      <PROJECT_3 />
      {/* <PROJECT_6 /> */}
      <PROJECT_5 />
      {/* <PORTFOLIO /> */}
    </div>
  );
}

export default PROJECTS_PAGE;
