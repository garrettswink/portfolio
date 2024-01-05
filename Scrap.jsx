

// 🔥🔥🔥 Contact.jsx 🔥🔥🔥
import "../style/Contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-header-container ">
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
            
        <div className="contact-form-button-container">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </div>
          </Form>
        </div>
        
      </div>
    </>
  );
}

// 🔥🔥🔥 Server App.js 🔥🔥🔥
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Route test: http://localhost:3001/api/sendemail
app.post("/api/sendemail", async (req, res) => {
  const { email, message } = req.body;

  try {
   
    const send_to = process.env.EMAIL_USER;
 
    const sent_from = process.env.EMAIL_USER;

    const subject = "ALERT!!! A New Portfolio Inquiry";

    const emailContent = `
        <h3>This message is from ${email}</h3>
        <p>${message}</p>
    `;
  

    await sendEmail(subject, emailContent, send_to, sent_from);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});