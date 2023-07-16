import React from 'react';
import '../project6/project6.css'

function PROJECT_6(){
    return(
        <div className="project-6">
        <div className='p6-img'></div>
        <div className="p6-details">
          <div className="p6-name-source">
            <div className="p6-name">TravelCompanion</div>
            <a
              href="https://github.com/PiyushSaklani/TravelCompanion.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p6-source-code"></div>
            </a>
          </div>
          <div className="p6-discription">
          Users of our application can discover there ideal vacation spots using TravelCompanion's website and mobile app. Our platform, built with React and React Native and powered by MongoDB, provides a thorough guide to planning your ideal trip. TravelCompanion offers an exceptional vacation experience by providing day-by-day itineraries as well as top suggestions for food, locations, and activities. 
          </div>
          <div className="p6-tools-used">
            <div className="p6-tool-1" id="p6-tool"></div>
            <div className="p6-tool-2" id="p6-tool"></div>
            <div className="p6-tool-3" id="p6-tool"></div>
            <div className="p6-tool-4" id="p6-tool"></div>
            <div className="p6-tool-5" id="p6-tool"></div>
          </div>
        </div>
      </div>
    )
}

export default PROJECT_6;