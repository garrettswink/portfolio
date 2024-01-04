const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from) => {

// Create the transporter
  const transporter = nodemailer.createTransport({
    // Update the host when deploying?
    host: process.env.EMAIL_HOST,
    // Port also likely needs to be updated.
    port: "587",
    
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Transport security layer. Setting to false will reduce errors, but needs to be flipped to True @ production, as I'm further reducing security.
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
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