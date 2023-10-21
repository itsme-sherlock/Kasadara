const express = require("express");
const app = express();
const path = require("path");

// Serve static files (React app) from the correct build folder
app.use(express.static(path.join(__dirname, "../build")));

// Handle other routes by serving the index.html file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
