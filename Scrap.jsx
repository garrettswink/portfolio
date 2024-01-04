// Server app.js
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
  const { email } = req.body;

//   Update this to match the sendEmail function in the utils folder 
//   Likely need to uupdate the below based on what I'm trying to accomplish
//   Sent_to => Outlook
//   Send_from => Same? Not sure...
//   Strike reply_to
  try {
    
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = "garrettswink.test@outlook.com";
    const subject = email;
    const message = `
        <h3>This is a test</h3>
        <p>To see if a message can be successfully sent.</p>
    `;

    // Will need to update parameters 
    await sendEmail(subject, message, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

// sendEmail.js
const nodemailer = require("nodemailer");

// Change variable name to send message.
// Adjust parameters. Likely remove reply_to, but maybe also sent_from
// Remember to make argument + function adjustments to match the parameters
// You will need to adjust the post req in the app.js file too
const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {

// Create the transporter
  const transporter = nodemailer.createTransport({
    // Update the host when deploying?
    host: process.env.EMAIL_HOST,
    // Port also likely needs to be updated. Using Gmail for the short term.
    port: "587",
    // See Nodemailer documentation. I believe this will be the gmail credentials. Eventually need to add withAuth
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Transport security layer. Setting to false will reduce errors, but needs to be flipped to True @ production, as I'm further reducing security.
    tls: {
      rejectUnauthorized: false,
    },
  });

//   If you adjust the parameters in sendEmail, these properties will also need to be updated.
//  Also, the post req in App.js
  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // Send Email
  // Options taken from above object
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;


// Contact.jsx
import "../style/Contact.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from 'axios';



export default function Contact() {

  const [email, setEmail] = useState("")

  const sendEmail = async (e) => {
    e.preventDefault()

    const data = {
      email
    }

    const response = await axios.post('http://localhost:3001/api/sendemail', data)
   
    console.log(response.data)

  }

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

            <Form.Group 
            className="mb-3" 
            controlId="exampleForm.ControlInput1">
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
              <Form.Control as="textarea" rows={8} />
            </Form.Group>
          </Form>
        </div>
{/* 🔥🔥🔥Button🔥🔥🔥 */}
        <div className="contact-form-button-container">
        <Button 
        variant="danger"
        type="submit"
        >Submit</Button>
        </div>

      </div>
    </>
  );
}
