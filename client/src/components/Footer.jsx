import "../style/Footer.css"
import LinkedIn from "../assets/LinkedIn.png"
import GitHub from "../assets/github.png"

export default function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="social-media-container">
            <a href="https://github.com/garrettswink" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} className="social-media-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/garrett-swink-1472868b/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} className="social-media-icon"/>
            </a>
            </div>
            
            <div className="copyright-container">
                <p>Copyright 2024</p>
            </div>
            
            <div className="right-container"></div>
        </div>
        </>
    )
}