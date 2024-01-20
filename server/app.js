const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");
// 🔥🔥🔥New🔥🔥🔥
const path = require('path'); 


const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Route 🔥🔥🔥REMOVED FOR TESTING. Delete or reimplement based on testing🔥🔥🔥
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

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

app.use(express.static(path.join(__dirname, './client/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});