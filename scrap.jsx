// Agency.jsx
import "../style/Agency.css"
import Accordion from 'react-bootstrap/Accordion';

export default function Agency(){
    return(
        <>
        <div className="agency-experience-container">
            <div className="agency-experience-header">
                <h1>10+ Years of Agency Experience</h1>
            </div>
            <div className="agency-experience-body">
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>We Communications - Director of Content & Channel Strategy</strong></Accordion.Header>
        <Accordion.Body>
       <p><strong>Clients:</strong> Microsoft, Intel, Brother, Alteryx</p>
       <p>- Test sentence number two</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Ketchum - Managing Account Supervisor</strong></Accordion.Header>
        <Accordion.Body>
          <p><strong>Clients:</strong> Nestlé, Tyson Foods, ExxonMobile, Ardent Mills, Corteva, Bunge</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>GMMB - Managing Account Supervisor</strong></Accordion.Header>
        <Accordion.Body>
          <p><strong>Clients:</strong> American Beverage Association, Fiat Chrysler Automobiles, United Health Group</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><strong>Goddard Gunster - Account Manager</strong></Accordion.Header>
        <Accordion.Body>
          <p><strong>Clients:</strong> American Beverage Association, The Coca-Cola Company, Walmart</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
        </div>
        </>
    )
}

//  Agency.css
.agency-experience-container {
    /* border: solid black 1px; */
    height: 1000px;
    width: 100%;
    /* background-color: lightblue; */
    display: flex; /* Use flexbox */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    flex-direction: column; /* Stack child divs vertically */
    margin-top: -100px;
}

.agency-experience-header {
    border-top: black solid 1px;
    border-bottom: black solid 1px;
    height: 50px;
    width: 700px;
    /* background-color: green; */
    margin-bottom: 20px; /* Optional spacing between child divs */
    /* margin-top: -300px; */
    text-align: center;
}

.agency-experience-body {
    /* border: solid black 1px; */
    height: 700px;
    width: 1000px;
    /* background-color: purple; */
    margin-top: 20px; /* Optional spacing between child divs */
}

.Accordion-Header{
    background-color: lightgrey;
}

// Prompt
That didn't work. Take a look at the code. How do I modify the accodion body elements so that they're light grey