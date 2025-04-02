import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Trabsporter Object
const { GMAIL_USER, GMAIL_PASS, SENDER_EMAIL } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, subject, email, message } = req.body;

    if (!name || !subject || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const mailOptions = {
      from: email,
      to: "oladeleambali@gmail.com",
      replyTo: email,
      subject: subject,
      html: `
      <h1>Hi Ridwan</h1>
      <p>My Name is ${name} and my email is ${email} reach out to me lets get working</p>
      <p>${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent: ", info.response);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).json({
      status: "error",
      message: "Error Sending mail, please try again",
    });
  }
});

export default router;
