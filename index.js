const express = require('express');
const dotenv = require('dotenv');   

// Load environment variables from .env file
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  const host = process.env.HOST || 'localhost'; // You can set this in your .env if needed
  console.log(`Server is running on http://${host}:${port}`);
});