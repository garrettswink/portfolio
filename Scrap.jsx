// Mern.JSX
import "../style/Mern.css";
import MernCard from "../components/MernCard.jsx";
import MongoLogo from "../assets/mongo_logo.jpg";
import ExpressLogo from "../assets/express.png";
import ReactLogo from "../assets/react.png";
import NodeLogo from "../assets/node.png";
import mernGroup from "../assets/mern-group.png"

export default function Mern() {
  return (
    <>
      <div className="mern-container">

        <div className="mern-header">
          <h1>MERN Stack Proficiency</h1>
        </div>

        <div className="mern-summary">
          <p>I specialize in building robust, engaging, and secure websites utilizing my expertise in the cutting-edge MERN stack (MongoDB, Express.js, React.js, and Node.js). I have worked with clients such as the American Beverage Association, Ardent Mills, Fiat Chrysler Automobiles, and Nestlé to ensure a user experience that fulfills client conversion benchmarks and content geared toward search engine optimization. </p>
        </div>

        <div className="mern-group">
          <img src={mernGroup}></img>
        </div>
        
        <div className="mern-body">
          <MernCard
            title="MongoDB"
            logo={MongoLogo}
            description="I am adept at building and managing NoSQL databases using MongoDB, ensuring efficient and secure data storage and retrieval for web applications."
          />
          <MernCard
            title="Express"
            logo={ExpressLogo}
            description="I have a strong grasp of creating RESTful APIs and middleware using Express.js, enabling seamless communication between frontend and backend web applications."
          />
          <MernCard
            title="React"
            logo={ReactLogo}
            description="I design interactive and user-friendly user interfaces in React, utilizing state management, component lifecycles, and third-party libraries to enhance the overall user experience."
          />
          <MernCard
            title="Node"
            logo={NodeLogo}
            description="I have experience in building scalable and high-performance server-side applications using Node.js, optimized for speed and efficiency."
          />
        </div>
      </div>
    </>
  );
}

// Mern CSS
.mern-container {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    height: 500px;
    width: 100%; 
    margin-top: 50px;
}

.mern-header {
    border-top: black solid 1px;
    border-bottom: black solid 1px;
    border-left: none;
    border-right: none;
    height: 50px;
    width: 700px;
    text-align: center;
}

.mern-summary {
    margin: 50px;
    width: 900px;
    height: 300px;
    margin-bottom: 20px;
}

.mern-body {
    height: 1000px;
    width: 1000px;
    margin: 10px; 
   display: flex;
}

.mern-group img{
    height: 300px;
    display: none;
}

@media (max-width: 600px) {
    .mern-container {
        /* Adjust margins and potentially height for smaller screens */
        margin-top: 25px;
        height: auto;
    }

    .mern-header {
        width: 100%;
        margin-left: 50%;
    }

    .mern-summary {
        /* Adjust width and margin to fit within smaller screens */
        width: 90%;
        margin: 25px auto;
        height: auto;
        margin-left: 30%;
    }

    .mern-body {
        /* Stack content vertically on smaller screens */
        /* flex-direction: column; */
        width: 165%;
       
        margin: 10px auto;
        height: auto;
    }
}

// Here's what I want to do. Using Media Queries:
// Default desktop displays the mern-body div and the mernCards within
// I have an image called mernGroup in a mern-group div
// These I want default hidden with CSS
// When viewed on a smartphone...aka when the mediaquery is activated
// I want .mernbody and/or mernCards hidden
// And I want the mernGroup image/div display.
// How would I do this? Is there a better way?