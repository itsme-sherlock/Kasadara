const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., "Gmail" or use SMTP details
  auth: {
    user: "atsherlockholmes@gmail.com", // Your email address
    pass: "jpfs ljui lydd qhby", // Your email password
  },
});

// Serve static files (React app) from the correct build folder
app.use(express.static(path.join(__dirname, "../build")));

// Handle other routes by serving the index.html file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});
app.use(express.json());

// Handle form submissions
app.post("/submit-form", (req, res) => {
  const { name, mobile, email } = req.body;

  const mailOptions = {
    from: "toaravindhan.t@gmail.com",
    to: "atsherlockholmes@gmail.com", // Your email where you want to receive the form details
    subject: "Form Submission",
    text: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

