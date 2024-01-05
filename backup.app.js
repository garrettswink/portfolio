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

  try {
   
    const send_to = email;
     // I want sent_to to stay the same.
    // The message comes to the correct Outlook inbox
 
    const sent_from = process.env.EMAIL_USER;
    // I want the sent_from updated 
    // So that it is from the email address provided
    // In the Contact.jsx form's email input

    const subject = email;
    // I want this hard coded to "Portfolio Contact Inquiry"

    const message = `
        <h3>This is a test</h3>
        <p>To see if a message can be successfully sent.</p>
    `;
    // The user input message does come through here. 
    // But I don't need this test language.
    // But i don't want to break my code.
    // Should this be an empty string?

    await sendEmail(subject, message, send_to, sent_from);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});