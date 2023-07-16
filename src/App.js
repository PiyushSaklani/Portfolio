import { useEffect } from "react";
import "./App.css";
import MAIN_PAGE from "./pages/main_page/main_page";

function App() {
  useEffect(() => {
    document.title = "Piyush's Portfolio"; // Set the new title here

  }, []);
  return (
    <div className="App">
      <div className="Pages">
        <MAIN_PAGE />
      </div>
      <div className="SocialMedia">
        <a href="mailto:saklani302@gmail.com">
          <div className="Mail" id="SM"></div>
        </a>

        <a href="https://github.com/PiyushSaklani" target="_blank" rel="noopener noreferrer">
          <div className="GitHub" id="SM"></div>
        </a>

        <a href="https://www.linkedin.com/in/piyushsaklani/" target="_blank" rel="noopener noreferrer">
          <div className="Linkedin" id="SM"></div>
        </a>

        <div className="SocialMedia-line"></div>
      </div>
    </div>
  );
}

export default App;
