require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require('./db');
mongoDB();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.use('/api/auth', require('./Routes/Auth'));
// app.use('/api', require('./Routes/CreateUser'));
// app.use('/api', require('./Routes/DisplayData'));
app.get('/', (req, res) => {
  res.send('Foodly Backend is Running Succcesfully');
});

// If you have DisplayData route, add it here
// app.use('/api', require('./Routes/DisplayData'));

app.listen(port, () => {
  console.log(`Foodly app listening on port :${port}`);
});