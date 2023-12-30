import "../style/About.css";
import profilePic from "../assets/profile-pic.png";

export default function About() {
  return (
    <>
      <div className="about-container">
        {/* 🔥🔥🔥 Profile Picture 🔥🔥🔥 */}
        <div className="profile-picture-container">
          <img src={profilePic} />
        </div>

        <div className="overview-copy-container">
          {/* 🔥🔥🔥 Overview Headline 🔥🔥🔥 */}
          <div className="overview-headline">
            <h1>Overview</h1>
          </div>

          {/* 🔥🔥🔥 Overview Body 🔥🔥🔥 */}
          <div className="overview-body">
            <p>
              I am a full-stack web developer with an expertise in JavaScript
              and MERN stack development, which encompasses MongoDB, Express,
              React, and Node.JS. I have also worked extensively with SQL
              databases and am an ongoing student of the Python programming
              language and Django framework.
            </p>
            <br></br>
            <p>
              In addition, I have deep knowledge and hands-on experience in all
              aspects of project and client management for a wide array of
              digital executions, including website builds, digital advertising,
              and social media amplification, which collectively provide
              holistic and highly effective digital communication solutions.
            </p>
            <br></br>
            <p>
              My passion for coding and continuous learning drives me to stay
              ahead of the curb on the latest digital trends and best web
              development practices, allowing me to create innovative,
              efficient, and user-friendly web solutions for clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
