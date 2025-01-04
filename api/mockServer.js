const express = require("express");
const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Root path handler
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// Weekly activity endpoint
app.get(["/weekly-activity", "/api/weekly-activity"], (req, res) => {
  const randomHeights = [30, 60, 40, 70, 30, 50, 60].map((height) => ({
    deposit: height,
    withdraw: Math.floor(Math.random() * 100),
  }));

  const response = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Deposits",
        data: randomHeights.map((item) => item.deposit),
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: "Withdrawals",
        data: randomHeights.map((item) => item.withdraw),
        backgroundColor: "#396AFF",
        borderColor: "#396AFF",
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };

  res.json(response);
});

// Catch-all handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.path}` });
});

module.exports = app;