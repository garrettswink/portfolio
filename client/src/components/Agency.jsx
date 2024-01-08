import "../style/Agency.css"
import Accordion from 'react-bootstrap/Accordion';

export default function Agency(){
    return(
        <>
        <div className="agency-experience-container">
            <div className="agency-experience-header">
                <h1>10+ Years of Agency Experience</h1>
            </div>

          <div className="agency-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

            <div className="agency-experience-body">
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>We Communications - Director of Content & Channel Strategy</strong></Accordion.Header>
        <Accordion.Body>
       <p><strong>Clients:</strong> Microsoft, Intel, Brother, Alteryx</p>
       <p><strong>Work Summary: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor, ligula non varius dictum, tortor justo convallis ex, non tincidunt metus justo in metus. Nullam iaculis, dolor a bibendum bibendum, elit velit fringilla odio, vel facilisis elit orci nec elit. Nullam auctor elit quis tortor semper, id malesuada arcu luctus. Integer euismod justo a ligula gravida, at convallis dolor dictum. Sed in turpis vel urna egestas tincidunt eget id tortor. Vivamus consectetur justo sed feugiat pellentesque.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Ketchum - Managing Account Supervisor</strong></Accordion.Header>
        <Accordion.Body>
          <p><strong>Clients:</strong> Nestlé, Tyson Foods, ExxonMobile, Ardent Mills, Corteva, Bunge</p>
          <p><strong>Work Summary:</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor, ligula non varius dictum, tortor justo convallis ex, non tincidunt metus justo in metus. Nullam iaculis, dolor a bibendum bibendum, elit velit fringilla odio, vel facilisis elit orci nec elit. Nullam auctor elit quis tortor semper, id malesuada arcu luctus. Integer euismod justo a ligula gravida, at convallis dolor dictum. Sed in turpis vel urna egestas tincidunt eget id tortor. Vivamus consectetur justo sed feugiat pellentesque.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>GMMB - Managing Account Supervisor</strong></Accordion.Header>
        <Accordion.Body>
          <p><strong>Clients:</strong> American Beverage Association, Fiat Chrysler Automobiles, United Health Group</p>
          <p><strong>Work Summary:</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor, ligula non varius dictum, tortor justo convallis ex, non tincidunt metus justo in metus. Nullam iaculis, dolor a bibendum bibendum, elit velit fringilla odio, vel facilisis elit orci nec elit. Nullam auctor elit quis tortor semper, id malesuada arcu luctus. Integer euismod justo a ligula gravida, at convallis dolor dictum. Sed in turpis vel urna egestas tincidunt eget id tortor. Vivamus consectetur justo sed feugiat pellentesque.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><strong>Goddard Gunster - Account Manager</strong></Accordion.Header>
        <Accordion.Body>
          <p><strong>Clients:</strong> American Beverage Association, The Coca-Cola Company, Walmart</p>
          <p><strong>Work Experience:</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor, ligula non varius dictum, tortor justo convallis ex, non tincidunt metus justo in metus. Nullam iaculis, dolor a bibendum bibendum, elit velit fringilla odio, vel facilisis elit orci nec elit. Nullam auctor elit quis tortor semper, id malesuada arcu luctus. Integer euismod justo a ligula gravida, at convallis dolor dictum. Sed in turpis vel urna egestas tincidunt eget id tortor. Vivamus consectetur justo sed feugiat pellentesque.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
        </div>
        </>
    )
}