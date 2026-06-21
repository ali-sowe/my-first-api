
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Render 🚀");
});

app.get("/api", (req, res) => {
  res.json({
    message: "My first deployed API",
    status: "working"
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
