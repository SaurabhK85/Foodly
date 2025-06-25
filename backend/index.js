const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require('./db');
mongoDB();

app.use((req, res, next) => {
  // Use the FRONTEND_URL from environment variables
  const allowedOrigins = [
    "http://localhost:3000",
    process.env.FRONTEND_URL || "https://foodly-app-five.vercel.app"
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

app.use(express.json())
app.use('/api/auth', require('./Routes/Auth'));

app.get('/', (req, res) => {
  res.send('Foodly Backend API is running!');
});

app.listen(port, () => {
  console.log(`Foodly app listening on port :${port}`);
});