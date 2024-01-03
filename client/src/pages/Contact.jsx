import "../style/Contact.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-header-container">
          <h1>Contact Me</h1>
        </div>

        <div className="contact-overview-container">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            reprehenderit vero eius cum nesciunt saepe sint, consectetur quis
            animi nemo ipsum laboriosam. Necessitatibus tempora porro aliquid
            consequatur. Deleniti praesentium ratione temporibus aliquid
            repudiandae, excepturi iure incidunt possimus, magni sit?
          </p>
        </div>

        <div className="contact-form-container">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={8} />
            </Form.Group>
          </Form>
        </div>

        <div className="contact-form-button-container">
        <Button variant="danger">Submit</Button>
        </div>

      </div>
    </>
  );
}