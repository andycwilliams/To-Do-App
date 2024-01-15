const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (including index.html) from the current directory
app.use(express.static(__dirname));

// Define a route to handle requests for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
