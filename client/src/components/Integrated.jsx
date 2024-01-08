import "../style/Integrated.css";
import MernCard from "../components/MernCard.jsx";
import Mern from "./Mern";

import SEO from "../assets/seo.png";
import Social from "../assets/social.png"
import Google from "../assets/google.png"
import Amazon from "../assets/amazon.png"


export default function Integrated() {
  return (
    <>
      <div className="integrated-container">
        <div className="integrated-header">
          <h1>Digital Communications Strategy</h1>
        </div>

        <div className="integrated-summary">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
        <div className="integrated-body">
          <MernCard 
          title="Social Media" 
          logo={Social}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam nec justo lobortis."
          />

          <MernCard title="Digital Ads" 
          logo={Google}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam nec justo lobortis."
          />

          <MernCard title="SEO + SEM" 
          logo={SEO}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam nec justo lobortis."
          />

          <MernCard title="Amazon Ads" 
          logo={Amazon}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam nec justo lobortis."
          />
        </div>
      </div>
    </>
  );
}
