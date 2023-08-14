const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Mock AI model metrics data
app.get("/api/metrics", (req, res) => {
  const mockMetrics = {
    accuracy: 0.85,
    precision: 0.78,
    recall: 0.92,
    // Add more metrics as needed
  };
  res.json(mockMetrics);
});

// Simulated AI predictions and actual results
app.get("/api/predictions", (req, res) => {
  const mockPredictions = [
    { input: [1.2, 2.3, 3.4], prediction: 0, actual: 1 },
    { input: [0.5, 1.8, 2.9], prediction: 1, actual: 1 },
    // Add more predictions as needed
  ];
  res.json(mockPredictions);
});

// Serve the index.html file as the entry point
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, +"public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
