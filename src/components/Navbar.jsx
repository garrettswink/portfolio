import "../style/Navbar.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import masthead from "../assets/masthead.gif"

export default function Navbar() {
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
    <div className="contact-container"><button type="button" class="btn btn-outline-danger">Contact Me</button>
</div>
    </div>
</>
    )
}