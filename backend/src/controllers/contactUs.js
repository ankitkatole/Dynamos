const ContactUs = require("../models/contactUs")
const sendEmail = require('../utils/email')

const contactUs = async (req,res) => {
    const {name, email , subject, message} = req.body

    try {

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required fields' })
        }

        const newContact = new ContactUs({ name , email, subject, message })
        await newContact.save()

        const subjectEmail = "Thanks for reaching out! We'll be in touch soon."
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Your Query Received - Digiwell is Here to Help!</title>
        </head>
        <body>
          <p>Dear ${name},</p>
          <p>Welcome to <b>Digiwell!</b> We're thrilled you reached out, and appreciate you trusting us with your inquiry.</p>
          <p>Thank you for contacting <a href="https://digiwell-dynamo-a.netlify.app">Digiwell</a>! We appreciate you reaching out to us.</p>
          <p>Our dedicated team has received your message and is actively working on a comprehensive response. You can expect a thoughtful reply within 24 hours.</p>
          <p>In the meantime, you can explore our website for answers to frequently asked questions: <a href="https://digiwell-dynamo-a.netlify.app/">FAQ</a>.</p>
          <p><b>Looking forward to exceeding your expectations!</b></p>
          <p>Sincerely,</p>
          <p>The Digiwell Team</p>
        </body>
        </html>
        `

        sendEmail(email, subjectEmail, html)

        res.status(201).send("Email send!");
    } catch (err) {
        console.error(err)
        res.status(500).send('Error sending email!');
    }
};

module.exports = contactUs