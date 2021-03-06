const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// TODO THIS IS WHERE YOU WOULD TEMPLATE THE EMAIL OUT
// Try this out: https://mjml.io/

// For now, just use a function:

const emailTemplate = text => `
  <div className="email" style="
  border: 1px solid black;
  padding: 20px;
  font-family: sans-serif;
  line-height: 2;
  font-size: 20px;
  ">
  <h2>Hello There!</h2>
  <p>${text}</p>
  <p>From, the Sickfits Team</p>
  </div>
`;

exports.transport = transport;
exports.emailTemplate = emailTemplate;