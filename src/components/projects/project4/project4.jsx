import React from "react";
import "../project4/project4.css";

function PROJECT_4() {
  return (
    <div className="project-4">
      <div className="p4-details">
        <div className="p4-name-source">
          <div className="p4-name">JobPortal</div>
          <a
            href="https://github.com/PiyushSaklani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p4-source-code"></div>
          </a>
        </div>
        <div className="p4-discription">
        A job portal made using React, Node.js, and MongoDB is a full-stack web application that allows users to search for job listings, create profiles, and apply for jobs.
        </div>
        <div className="p4-tools-used">
          <div className="p4-tool-1" id="p4-tool"></div>
          <div className="p4-tool-2" id="p4-tool"></div>
          <div className="p4-tool-3" id="p4-tool"></div>
          <div className="p4-tool-4" id="p4-tool"></div>
          <div className="p4-tool-5" id="p4-tool"></div>
        </div>
      </div>
      <div className='p4-img'></div>
    </div>
  );
}

export default PROJECT_4;
