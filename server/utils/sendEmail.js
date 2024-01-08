const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from) => {

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: "587",
    
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Transport security layer. 
    // Setting to false will reduce errors, but needs to be flipped to True @ production
    // Reminder to add withAuth layer to the stack, as well. 
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

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;