import React from "react";
import "../project5/project5.css";

function PROJECT_5() {
  return (
    <div className="project-5">
      <div className="p5-bottom-div-1">
        <div className="p5.1-div" id="sub-p5">
          <div id="p5-project-title">AIP Scheduler</div>
          <div id="p5-project-content">
            This system utilizes React for a user-friendly scheduling interface
            and SQL Server as the backend database. Users can easily schedule
            and manage APIs, reducing manual effort. React handles the front-end
            interface and communicates with SQL Server to store and retrieve
            data. The system streamlines scheduling, improving efficiency and
            user experience.
          </div>
          <div id="p5-project-bar"></div>
          <div id="tools">
            <div className="p51-tool-1"></div>
            <div className="p51-tool-2"></div>
            <div className="p51-tool-3"></div>
            <div className="p51-tool-4"></div>
            <div className="p51-tool-5"></div>
          </div>
        </div>
        <div className="p5.2-div" id="sub-p5">
        <div id="p5-project-title">Simulating an Epidemic</div>
          <div id="p5-project-content">
          I developed a simulation program to study the spread of epidemics like COVID-19. The program allows analysis of different parameters and interventions such as quarantine and vaccination. By gathering data and studying various models, the program provides insights into the effects of these factors on the virus spread. It serves as a valuable tool for understanding and making evidence-based decisions in epidemic control.
          </div>
          <div id="p5-project-bar"></div>
          <div id="tools">
            <div className="p52-tool-1"></div>
            <div className="p52-tool-2"></div>
          </div>
        </div>
      </div>
      <div className="p5-bottom-div-2"></div>
    </div>
  );
}

export default PROJECT_5;
