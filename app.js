const express = require("express");
const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello from afsara Node.js App with CI/CD!");
});

// Healthcheck endpoint
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://0.0.0.0:${PORT}/`);
});
