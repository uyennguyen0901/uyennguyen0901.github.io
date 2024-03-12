// require('dotenv').config();
// const express = require('express');
// const sgMail = require('@sendgrid/mail');
// const bodyParser = require('body-parser');
// const app = express();
// const cors = require('cors');
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// app.post('/send-email', (req, res) => {
//     const { name, email, subject, message } = req.body;
//     const msg = {
//         to: email,
//         from: process.env.EMAIL,
//         subject: subject,
//         text: `Hello ${name},\n\nThank you for reaching out and expressing your interest. I have received your email and truly appreciate you taking the time to write to me. Please know that your message is important, and I am eager to address any questions or comments you may have. I will make sure to catch up with you within the next two business days. Looking forward to our conversation.\n\nBest regards,`

//     };

//     sgMail.send(msg).then(() => {
//         console.log('Email sent');
//         res.json({ message: 'Email sent successfully' }); // Changed to JSON response
//     }).catch((error) => {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to send email' }); // Changed to JSON response
//     });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Email sent to the sender as a confirmation
    const confirmationMsg = {
        to: email, // Sender's email
        from: process.env.EMAIL, // Your email (configured in .env)
        subject: `Confirmation: ${subject}`,
        text: `Hello ${name},\n\nThank you for reaching out and expressing your interest. I have received your email and truly appreciate you taking the time to write to me. Please know that your message is important, and I am eager to address any questions or comments you may have. I will make sure to catch up with you within the next two business days. Looking forward to our conversation.\n\nBest regards,`
    };

    // Email sent to you with the sender's message
    const receiveMsg = {
        to: process.env.YOUR_RECEIVING_EMAIL, // Your email where you want to receive messages
        from: process.env.EMAIL, // Your email (configured in .env)
        subject: `New message from ${name}: ${subject}`,
        text: `You've received a new message from ${name} (${email}).\n\nSubject: ${subject}\n\nMessage: ${message}`
    };

    // Sending confirmation email to the sender
    sgMail.send(confirmationMsg).then(() => {
        console.log('Confirmation email sent to sender');
        // After sending confirmation, send the message to your email
        sgMail.send(receiveMsg).then(() => {
            console.log('Email received from sender');
            res.json({ message: 'Email sent and received successfully' });
        }).catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Failed to receive email' });
        });
    }).catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to send confirmation email' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
