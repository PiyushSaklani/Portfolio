import React from "react";
import "../project2/project2.css";

function PROJECT_2() {
  return (
    <div className="project-2">
      <div className="p2-details">
        <div className="p2-name-source">
          <div className="p2-name">Talkies</div>
          <a
            href="https://github.com/PiyushSaklani/ChatAPP.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p2-source-code"></div>
          </a>
        </div>
        <div className="p2-discription">
        Talkies is a chat application built with Flutter and a Firebase database. Regardless of location, it enables users to connect and communicate in real-time. Talkies makes it simple for friends and family to communicate with each other thanks to its user-friendly interface and clear design.
        </div>
        <div className="p2-tools-used">
          <div className="p2-tool-1" id="p2-tool"></div>
          <div className="p2-tool-2" id="p2-tool"></div>
          <div className="p2-tool-3" id="p2-tool"></div>
        </div>
      </div>
      <div className='project-img-p2'>
      <div className="p2-img-c1">
        <div className="p-2-img-1" id="p-img"></div>
      </div>
      <div className="p2-img-c2">
        <div className="p-2-img-2" id="p-img"></div>
        <div className="p-2-img-3" id="p-img"></div>
      </div>
      <div className="p2-img-c3">
        <div className="p-2-img-4" id="p-img"></div>
      </div>
      </div>
    </div>
  );
}

export default PROJECT_2;
