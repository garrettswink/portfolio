import "../style/Mern.css";
import MernCard from "../components/MernCard.jsx";
import MongoLogo from "../assets/mongo_logo.jpg";
import ExpressLogo from "../assets/express-js.png";
import ReactLogo from "../assets/react-logo-2.png";
import NodeLogo from "../assets/node_logo.jpg";

export default function Mern() {
  return (
    <>
      <div className="mern-container">
        <div className="mern-header">
          <h1>MERN Stack Proficiency</h1>
        </div>
        <div className="mern-body">
          <MernCard
            title="MongoDB"
            logo={MongoLogo}
            description="I am adept at designing and managing NoSQL databases using MongoDB, ensuring efficient data storage and retrieval for web applications."
          />
          <MernCard
            title="Express"
            logo={ExpressLogo}
            description="I have a strong grasp of creating RESTful APIs and middleware using Express.js, enabling seamless communication between frontend and backend web applications."
          />
          <MernCard
            title="React"
            logo={ReactLogo}
            description="I desgin interactive and user-friendly user interfaces in React, utilizing state management, component lifecycles, and third party libraries to enhance the overall user experience."
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
