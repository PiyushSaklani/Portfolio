import React from 'react';
import '../project1/project1.css'

function PROJECT_1(){
    return(
        <div className="project-1">
        <div className="p1-img-c1">
          <div className="p-1-img-1" id="p-img"></div>
        </div>
        <div className="p1-img-c2">
          <div className="p-1-img-2" id="p-img"></div>
          <div className="p-1-img-3" id="p-img"></div>
        </div>
        <div className="p1-img-c3">
          <div className="p-1-img-4" id="p-img"></div>
        </div>
        <div className="p1-details">
          <div className="p1-name-source">
            <div className="p1-name">EDUZU</div>
            <a
              href="https://github.com/PiyushSaklani/EDUZU-Project.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p1-source-code"></div>
            </a>
          </div>
          <div className="p1-discription">
            EDUZU is a mobile application built using the Flutter framework, a
            widely used open-source platform for developing mobile apps. The app
            also uses Supabase for its backend needs. EDUZU boasts a
            user-friendly and visually appealing interface, while Supabase
            enhances its functionality by providing reliable data storage and
            secure user authentication.
          </div>
          <div className="p1-tools-used">
            <div className="p1-tool-1" id="p1-tool"></div>
            <div className="p1-tool-2" id="p1-tool"></div>
          </div>
        </div>
      </div>
    )
}

export default PROJECT_1;