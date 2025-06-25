const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require('./db');
mongoDB();

// CORS middleware - MUST be before routes
app.use((req, res, next) => {
  const allowedOrigin = process.env.FRONTEND_URL || "https://foodly-app-five.vercel.app";
  
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

app.use(express.json());
app.use('/api/auth', require('./Routes/Auth'));

app.get('/', (req, res) => {
  res.send('Foodly Backend API is running!');
});

app.listen(port, () => {
  console.log(`Foodly app listening on port :${port}`);
});