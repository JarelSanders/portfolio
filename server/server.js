const express = require('express');
const nodemailer = require("nodemailer");

const PORT = 3000;

const app = express()

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));


// Handle form submissions
app.post('/send-email', (req, res) => {
    const { email, message } = req.body;

    // Create a nodemailer transporter with your email credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'gmail'
        auth: {
            user: 'jarel.sanderss@gmail.com', // Your email address
            pass: 'Your password' // Your email password
        }
    });

    // Define email options
    const mailOptions = {
        from: 'Your email', // Sender address
        to: 'Your personal email', // Receiver address
        subject: 'New message from your website', // Subject line
        text: `Email: ${email}\nMessage: ${message}` // Plain text body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'An error occurred while sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true });
        }
    });
});

console.log('Server started');


// app.get('/test', (req, res) => {
//     res.json({ok: true});
// });

// app.get('/greet/:name', (req, res) => {
//     res.json({greeting: `Hello ${req.params.name}`});
// });

// console.log('test')