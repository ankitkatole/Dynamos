const User = require("../models/user.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/email.js");
const {SECRETKEY} = require("../../constants.js")

const signUp = async (req, res) => {
    const {name, email ,password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) {
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User({name, email, password : hashedPassword});
            newUser.save();

            const token = jwt.sign({email}, SECRETKEY, { expiresIn: "24h" });

            let subject = `Welcome to Digiwell, ${name}!`;

            let html = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                    </head>
                    <body>
                        <h1>Hi ${name},</h1>
                        <p>We're thrilled to welcome you to the Digiwell community!</p>
                        <h2>Getting Started</h2>
                        <p>If you have any questions or need help navigating the website, please don't hesitate to contact our friendly support team at <a href="https://digiwell-dynamo-a.netlify.app/">Digiwell</a>.</p>
                        <p>Welcome aboard! We're excited to have you as part of the community.</p>
                        <p>Best regards,</p>
                        <p>The Digiwell Team</p>
                    </body>
                    </html>
                    `;

            await sendEmail(email, subject, html);

            console.log("Account created successfully!");
            res.status(200).send({token, email, message: "Account created successfully!" });

        } else {
            res.status(400).send("User already exists!");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("SignUp Failed!");
    }
};

const login = async (req, res) => {
    const {email ,password} = req.body;

    try {
        const user = await User.findOne({email});

        if(user) {
            const validate = await bcrypt.compare(password, user.password);

            if(validate) {
                const token = jwt.sign({email}, SECRETKEY, { expiresIn: "24h" });
                await User.updateOne(//changes
                    { _id: user._id },
                    { $set: { lastLogin: Date.now() } }
                  );
                res.status(200).send({token, email, message: "Logedin successfully!" });
            } else {
                res.status(401).send("Incorrect Password!");
            }

        } else {
            res.status(400).send("Create account first!");
        }

    } catch (error) {
        res.status(500).send("Login Failed!");
    }
};

const verify = async (req, res) => {
    const token = req.body.token;

    if (!token) {
        return res.status(400).send({ login: false, data: "Token is required" });
    }

    try {
        const decoded = jwt.verify(token, SECRETKEY);
        res.status(200).send({ login: true, data: decoded });
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(400).send({ login: false, data: "Login unsuccessful" });
    }
};

module.exports = {signUp, login, verify};