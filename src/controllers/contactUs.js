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
          <title>Thanks for Contacting Us!</title>
        </head>
        <body>
          <p>Dear ${name},</p>
          <p>Thank you for contacting <a href="https://digiwell-dynamo-a.netlify.app">Digiwell</a>! We appreciate you reaching out to us.</p>
          <p>We've received your message and our team is working on a response. You can expect to hear back from us within 24 hours.</p>
          <p>In the meantime, you can explore our website for answers to frequently asked questions: <a href="https://digiwell-dynamo-a.netlify.app/">FAQ</a>.</p>
          <p>We look forward to assisting you further!</p>
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