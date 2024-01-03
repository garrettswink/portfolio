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