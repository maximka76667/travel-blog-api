require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000, DB_URL } = process.env;

const app = express();

const connectDB = async () => {
  await mongoose.connect(DB_URL);
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

connectDB();
