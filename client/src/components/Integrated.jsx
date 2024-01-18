import "../style/Integrated.css";
import MernCard from "../components/MernCard.jsx";
import Mern from "./Mern";

import SEO from "../assets/seo.png";
import Social from "../assets/social.png"
import Google from "../assets/google.png"
import Amazon from "../assets/amazon.png"
import IntegratedGroup from "../assets/integrated-group.png"


export default function Integrated() {
  return (
    <>
      <div className="integrated-container">
        <div className="integrated-header">
          <h1>Digital Communications Strategy</h1>
        </div>

        <div className="integrated-summary">
            <p>In addition to web development, I provide consultation and complimenting holistic digital amplification strategies that raise awareness and drive users to a website landing page for key conversions like sign-up or product purchase. Digital amplification campaigns include comprehensive strategy documents outlining objectives, miles stones, and measures of success — in addition to a final report that clearly demonstrates how funds were allocated across channels to achieve key performance indicators and metrics.</p>
        </div>

        <div className="integrated-group">
        <img src={IntegratedGroup}></img>
        </div>

        <div className="integrated-body">
          <MernCard 
          title="Social Media" 
          logo={Social}
          description="I have expertise in creating optimized organic content and paid promotion strategies across most major social platforms."
          />

          <MernCard title="Digital Ads" 
          logo={Google}
          description="I have worked extensively with Google Ads and can assemble sophisticated custom ad buys with major industry-specific publications."
          />

          <MernCard title="SEO + SEM" 
          logo={SEO}
          description="SEO is an emphasis for all copy that I create. I also offer research-based revisions for existing content and bid placement strategies for SEM campaigns."
          />

          <MernCard title="Amazon Ads" 
          logo={Amazon}
          description="I have worked extensively within the Amazon for business ecosystem, creating business storefronts and complimenting in-platform promotion campaigns."
          />
        </div>
      </div>
    </>
  );
}
