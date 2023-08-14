const metricsContainer = document.getElementById("metrics");
const predictionsContainer = document.getElementById("predictions");

// Fetch AI metrics data
fetch("/api/metrics")
  .then((response) => response.json())
  .then((data) => {
    metricsContainer.innerHTML = `
      <p>Accuracy: ${data.accuracy}</p>
      <p>Precision: ${data.precision}</p>
      <p>Recall: ${data.recall}</p>
      <!-- Add more metrics here -->
    `;
  })
  .catch((error) => {
    console.error("Error fetching metrics:", error);
  });

// Fetch AI predictions and actual results
fetch("/api/predictions")
  .then((response) => response.json())
  .then((data) => {
    predictionsContainer.innerHTML = data
      .map(
        (prediction) => `
      <div>
        <p>Input: ${prediction.input.join(", ")}</p>
        <p>Prediction: ${prediction.prediction}</p>
        <p>Actual: ${prediction.actual}</p>
      </div>
    `
      )
      .join("");
  })
  .catch((error) => {
    console.error("Error fetching predictions:", error);
  });
