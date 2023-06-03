import React, { useState } from "react";
import "../contact/contact.css";

function CONTACT() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sub: subject, txt: `Name: ${name}\nEmail: ${email}\n\n ${content}` }),
    };
  
    fetch('http://localhost:8080/send-email', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('Email sent successfully:', data);
        alert("Email sent successfully")
      })
      .catch((error) => {
        alert("ERROR: Unable to send email")
        console.error('Failed to send email:', error);
      });

  };

  return (
    <div className="contact-main" id="contact-section">
      <div className="contact-flex-div1">
        <div className="contact-logo"></div>
        <a href="Resume.pdf" download>
          <div className="download">
            <div className="download-title">Resume</div>
            <div className="download-logo"></div>
          </div>
        </a>
        <div className="contact-SocialMedia">
        <a href="mailto:saklani302@gmail.com">
          <div className="contact-Mail" id="SM"></div>
        </a>

        <a href="https://github.com/PiyushSaklani" target="_blank" rel="noopener noreferrer">
          <div className="contact-GitHub" id="SM"></div>
        </a>

        <a href="https://www.linkedin.com/in/piyushsaklani/" target="_blank" rel="noopener noreferrer">
          <div className="contact-Linkedin" id="SM"></div>
        </a>
      </div>
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

          <div className="form-subject" id="form-div">
            <label htmlFor="subject">Subject:</label>
            <input
              type="subject"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="form-input-2"
              placeholder="Subject"
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
