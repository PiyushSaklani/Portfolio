const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Create a transporter with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tm.num.001@gmail.com',
    pass: 'xcbgbcamxpbntkls',
  },
});

// Function to send an email
const sendEmail = async (sub,txt) => {
  try {
    // Send email
    const info = await transporter.sendMail({
      from: 'tm.num.001@gmail.com',
      to: 'saklani302@gmail.com',
      subject: sub,
      text: txt,
    });

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Handle POST request to send email
app.post('/send-email', (req, res) => {
  const sub = req.body.sub;
  const txt = req.body.txt;

  sendEmail(sub,txt)
    .then(() => {
      res.status(200).json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Failed to send email' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
