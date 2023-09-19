const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mysql = require('mysql');

const app = express();
const cors = require('cors');
app.use(cors());
// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create a MySQL connection
const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "Krysta0988550999!!",
   database: 'resume'
});
db.connect();

app.post('/send-email', async (req, res) => {
   const { name, email, subject, message } = req.body;

   // Save to MySQL if needed
   db.query("INSERT INTO contact_messages(name, email, subject, message) VALUES(?, ?, ?, ?)", [name, email, subject, message], function(error) {
      if (error) throw error;
   });

   // Set up Nodemailer
   let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: 'uyenuyennguyen999@gmail.com',
         pass: 'uyen0988550999' // use Google App Password for better security
      }
   });

   let mailOptions = {
      from: `${email}`,
      to: 'uyenuyennguyen999@gmail.com', // can replace with any email
      subject: `New Message from ${name} - ${subject}`,
      text: `${message}\n\nSent by: ${email}`
   };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.log("Error sending email: ", error);
        res.json({ error: 'Error sending email!' });
        } else {
        console.log("Email sent: ", info.response);
        res.json({ message: 'Email sent!' });
        }
    });
 
   try {
      await transporter.sendMail(mailOptions);
      res.json({ message: 'Email sent!' });
   } catch (error) {
      res.json({ error: 'Error sending email!' });
   }
});

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});
