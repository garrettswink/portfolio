// Contact Page
import "../style/Contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import Notification from "../components/Notification";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const data = {
      email,
      message,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/sendemail",
        data
      );
      console.log(response.data);

      setEmail("");
      setMessage("");
      setShowNotification(true);
      setNotificationMessage("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setShowNotification(true);
      setNotificationMessage("Error sending email. Please try again later.");
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-header-container ">
          <h1>Contact Me</h1>
        </div>

        <div className="contact-overview-container">
          <p>If you have any questions, inquiries, or would like to discuss potential projects, please feel free to get in touch using the below contact form, or by reaching out to me directly at garrettswink@outlook.com.</p>
        </div>

        <div className="contact-form-container">
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={8} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            {/* 🔥🔥🔥Button🔥🔥🔥 */}
        <div className="contact-form-button-container">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </div>
          </Form>
        </div>
        <Notification show={showNotification} message={notificationMessage} />
      </div>
    </>
  );
}

// Notification Component
import React from "react";
import "../style/Notification.css"

export default function Notification ({message, show}) {
    return (
        show && (
            <div className="notification">
            <p>{message}</p>
            </div>
        )
    )
}

// Notification CSS
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s, transform 0.3s;
  }
  
  .notification.show {
    opacity: 1;
    transform: translateY(0);
  }