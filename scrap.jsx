// App JSX
import Navbar from './components/Navbar';
import './style/App.css'
import About from './components/About'

export default function App() {
  return (
  <>
    <Navbar />
    <About />
  </>
  );
}

// App CSS
body {
    background-color: antiquewhite;
    margin: 0;
}

// Navbar JSX
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
        <h1>Digital Communications Strategy</h1>
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

// Navbar CSS
.nav-container {
    height: 75px;
    width: 100%;
    border: 1px solid black;
    background-color: white;
    display: flex;
    position: fixed;
}

.hamburger-container {
    height: 100%;
    width: 25%;
    border: 1px solid black;
    background-color: black;
}

.hamburger-container h1 {
    font-size: medium;
    color: red;
    font-family: monospace;
    margin: 0;
}

.copy-container {
    margin-top: 20px;
    margin-left: 90px;
}

.masthead-container {
    height: 100%;
    width: 50%;
    border: 1px solid black;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.masthead-container img {
    height: 73px;
}

.contact-container {
    height: 100%;
    width: 25%;
    border: 1px solid black;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

//  About JSX
import "../style/About.css"

export default function About() {
    return (
        <>
        <div className="about-container">
        <div className="profile-picture-container"></div>
        <div className="overview-copy-container"></div>
        </div>
        </>
    )
}

// About CSS
.about-container{
    display: flex;
    height: 500px;
    width: 500px;
    border: 1px black solid;
}

.profile-picture-container {
    border: black 1px solid;
    height: 100px;
    width: 100px;
}

.overview-copy-container {
    border: black 1px solid;
    height: 100px;
    width: 100px;
}