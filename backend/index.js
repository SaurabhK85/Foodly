const express = require('express');
const cors = require('cors'); // You'll need to install this
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require('./db');
mongoDB();

// Use cors package instead
app.use(cors({
  origin: process.env.FRONTEND_URL || "https://foodly-app-five.vercel.app",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api/auth', require('./Routes/Auth'));

app.get('/', (req, res) => {
  res.send('Foodly Backend API is running!');
});

app.listen(port, () => {
  console.log(`Foodly app listening on port :${port}`);
});