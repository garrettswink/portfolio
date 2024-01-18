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
