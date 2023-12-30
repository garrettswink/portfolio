import "../style/Navbar.css";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import masthead from "../assets/masthead.gif";

export default function Navbar() {
    
  const navigate = useNavigate();
  const location = useLocation();

  const buttonText = location.pathname === "/contact" ? "Overview" : "Contact Me";
  const buttonAction = location.pathname === "/contact" ? "/" : "/contact";

  const handleButtonClick = () => {
    navigate(buttonAction);
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
            className="btn btn-outline-danger"
            onClick={handleButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}
