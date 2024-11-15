const express = require('express');
const app = express();

app.use(express.json());

app.get('/simulate-error', (req, res) => {
  const errorType = req.query.errorType; // Get the errorType from query parameters

  switch (errorType) {
      case 'validation':
          res.status(400).json({
              errorCode: "ERR400_VALIDATION",
              errorMessage: "Input validation failed. Please check your data."
          });
          break;
      case 'auth':
          res.status(401).json({
              errorCode: "ERR401_AUTH",
              errorMessage: "Authentication failed. Please log in."
          });
          break;
      case 'server':
          res.status(500).json({
              errorCode: "ERR500_SERVER",
              errorMessage: "Internal server error. Please try again later."
          });
          break;
      default:
          res.status(200).json({
              message: "No errors, everything is fine!"
          });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
