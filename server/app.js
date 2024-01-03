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