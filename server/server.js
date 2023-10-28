const express = require("express");
const app = express();
const path = require("path");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., "Gmail" or use SMTP details
  auth: {
    user: "atsherlockholmes@gmail.com", // Your email address
    pass: "jpfs ljui lydd qhby", // Your email password
  },
});

// Google Sheets API configuration
const sheets = google.sheets("v4");
const sheetsAuth = new google.auth.GoogleAuth({
  keyFile: "./credentials.json", // Path to the downloaded JSON credentials file
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

// Your Google Sheets document ID
const spreadsheetId = "1UbaBn-dCagG4A3Nzde_wVEWjms6QQjAUZnI3WqfOsXo"; // You can find this in the URL of your Google Sheets document

// Serve static files (React app) from the correct build folder
app.use(express.static(path.join(__dirname, "../build")));

// Handle other routes by serving the index.html file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.use(express.json());

// Handle form submissions
app.post("/submit-form", async (req, res) => {
  const { name, mobile, email } = req.body;

  const mailOptions = {
    from: "toaravindhan.t@gmail.com",
    to: "atsherlockholmes@gmail.com", // Your email where you want to receive the form details
    subject: "Form Submission",
    text: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });

  // Capture the form data in Google Sheets
  try {
    const auth = await sheetsAuth.getClient();
    const sheetsApi = google.sheets({ version: "v4", auth });

    await sheetsApi.spreadsheets.values.append({
      spreadsheetId,
      range: "A1", // Update this to the appropriate range in your sheet
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [[name, mobile, email]],
      },
    });

    console.log("Form data captured in Google Sheets.");
  } catch (error) {
    console.error("Error capturing form data in Google Sheets:", error);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
