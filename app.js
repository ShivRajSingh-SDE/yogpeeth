const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/submit-form", async (req, res) => {
  const { name, email, mobile, message } = req.body;

  try {
    // Create or update the user with the submitted data (optional)
    // This is just an example, adjust it based on your requirements

    // Send user data to the specified email address
    await sendFormDataEmail(name, mobile, message);

    res.json("Email sent successfully");
  } catch (e) {
    console.error("Error in /submit-form:", e);
    res.status(500).json("An error occurred");
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bankumoneyhu@gmail.com",
    pass: "tnsg knwg rqyj bbjq",
  },
});

const sendFormDataEmail = async (name, mobile, message) => {
  try {
    const mailOptions = {
      from: "bankumoneyhu@gmail.com",
      to: "upcharyogayurved@gmail.com",
      subject: "Form Submission",
      text: `Hello Owner here is new Client ☀️ \nName: ${name}\nMobile: ${mobile}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
