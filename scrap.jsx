import "../style/Navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import masthead from "../assets/masthead.gif";

export default function Navbar() {
    
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="nav-container">
        <div className="hamburger-container">
          <div className="copy-container">
            <h1>Full Stack Web Development</h1>
            <h1>Digital Comms Strategy</h1>
          </div>
        </div>
        <div className="masthead-container">
          <img src={masthead} />
        </div>
        <div className="contact-button-container">
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={handleContactClick}>
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}

// I have updated the code but it is not functioning properly
// When on the / page. I want the button in the Navbar to say Contact Me
// When the button is clicked, I want it to take the user to the /contact page
// When on the contact page
// I want the button text to say Overview
// When the button is clicked
// I want it to take the user back to the / page