import React, { useState } from "react";
import "../contact/contact.css";

function CONTACT() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="contact-main">
      <div className="contact-flex-div1">
        <div className="contact-logo"></div>
        <a href="src/assets/Piyush'sResume.pdf" download>
          <div className="download">
            <div className="download-title">Resume</div>
            <div className="download-logo"></div>
          </div>
        </a>
      </div>
      <div className="contact-flex-div2">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-name" id="form-div">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input-1"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-email" id="form-div">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input-2"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-content" id="form-div">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-input-3"
              placeholder="Content.."
            ></textarea>
          </div>

          <div className="form-btn-div">
            <button type="submit" className="form-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CONTACT;
