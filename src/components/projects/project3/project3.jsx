import React from 'react';
import '../project3/project3.css'

function PROJECT_3(){
    return(
        <div className="project-3">
        <div className='p3-img'></div>
        <div className="p3-details">
          <div className="p3-name-source">
            <div className="p3-name">MongoProject</div>
            <a
              href="https://github.com/PiyushSaklani/Mongodb-CRUD.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p3-source-code"></div>
            </a>
          </div>
          <div className="p3-discription">
          Users of our application can interact using it to perform a variety of database operations. Data can be added, changed, removed, or retrieved with ease. Regardless of user technical experience, this user-friendly interface improves database management productivity, efficiency, and accessibility.
          </div>
          <div className="p3-tools-used">
            <div className="p3-tool-1" id="p3-tool"></div>
            <div className="p3-tool-2" id="p3-tool"></div>
            <div className="p3-tool-3" id="p3-tool"></div>
            <div className="p3-tool-4" id="p3-tool"></div>
            <div className="p3-tool-5" id="p3-tool"></div>
          </div>
        </div>
      </div>
    )
}

export default PROJECT_3;