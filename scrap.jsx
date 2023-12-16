// Navbar.jsx
import "../style/Navbar.css"

export default function Navbar() {
    return (
<>
<div className="nav-container">
    <div className="hamburger-container"></div>
    <div className="masthead-container"></div>
    <div className="contact-container"></div>
    </div>
</>
    )
}

// Navbar.css
.nav-container{
  height: 500px;
  width: 500px;
  border: 1px solid black;
  background-color: white;
  display: flex;
}

.hamburger-container{
  height: 50px;
  width: 50px;
  border: 1px solid black;

}

.masthead-container{
  height: 50px;
  width: 50px;
  border: 1px solid black;
}

.contact-container{
  height: 50px;
  width: 50px;
  border: 1px solid black;
}

// Prompt
// I'm in the process of building a navbar for my professional website
// I want something clean and professional.
// Let's take the build step by step
// Based on the provide component and CSS file
// How do I get the nav-container to sit at the top without any viewport margin