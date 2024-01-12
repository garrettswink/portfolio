import "../style/Agency.css"
import Accordion from 'react-bootstrap/Accordion';

export default function Agency(){
    return(
        <>
        <div className="agency-experience-container">
            <div className="agency-experience-header">
                <h1>10+ Years of Agency Experience</h1>
            </div>

          <div className="agency-summary">With over a decade of experience working with some of the largest companies and most popular brands, I have honed a client management style emphasizing clear communication, comprehensive strategy documents, thorough reporting, and a drive to exceed client expectations.</div>

            <div className="agency-experience-body">
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>We Communications - Director of Content & Channel Strategy</strong></Accordion.Header>
        <Accordion.Body>
       <p><strong>Clients:</strong> Microsoft, Intel, Brother, Alteryx</p>
       <p>Conducted thorough audits of digital communications channels for Intel and Alteryx, providing guidance for organic content and amplification strategies.</p>
        <p>Implemented a b2b marketing program with Microsoft, showcasing cloud solutions for small and medium businesses. </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Ketchum - Managing Account Supervisor</strong></Accordion.Header>
        <Accordion.Body>
          <p><strong>Clients:</strong> Nestlé, Tyson Foods, ExxonMobile, Ardent Mills, Corteva, Bunge</p>
          <p>Oversaw the development, quarterly refresh, and overall maintenance of b2b websites for Nestlé and Ardent Mills.</p>
          <p>Directed paid digital advertising, organic and social media, and customer outreach email programs for both clients, driving audiences to key landing pages for purchases and other key conversions.  </p>
          <p>Researched best practices, oversaw creative direction, and implemented Nestlé Coffee mate’s Amazon storefront and in-platform advertising. </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>GMMB - Managing Account Supervisor</strong></Accordion.Header>
        <Accordion.Body>
          <p><strong>Clients:</strong> American Beverage Association, Fiat Chrysler Automobiles, United Health Group</p>
          <p>Directed the build and maintenance of public affairs websites for American Beverage Association and Fiat Chrysler, in addition to the creative development of a complimenting paid media efforts, which included organic and boosted social media. </p>
          <p>For the development of Fiat Chrysler's CheckToProtect.org website, I worked with key stake holders to implement an API which allowed users to check the status of their vehicle safety while assuring the security of their personal data. </p>
          <p>Oversaw an extensive national paid media program for United Health Group, which included social media, banner placement on tier 1 news websites, IoT advertising, and digital billboards for national airports. </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><strong>Goddard Gunster - Account Manager</strong></Accordion.Header>
        <Accordion.Body>
          <p><strong>Clients:</strong> American Beverage Association, The Coca-Cola Company, Walmart</p>
<p>Worked with Walmart and American Beverage Association on a series of grassroots and grass-tops public affairs campaigns, which included website development, programmatic digital ad buys, TV ad production and placement, as well as paid and organic social media amplification driving audience awareness and key conversions. </p>


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
        </div>
        </>
    )
}