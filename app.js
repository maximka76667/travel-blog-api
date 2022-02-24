require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

const { DB_URL } = require('./config');

// Loggers
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

// Connection to DataBase
const connectDB = async () => {
  await mongoose.connect(DB_URL);
};

// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logs
app.use(requestLogger);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error Logs
app.use(errorLogger);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

connectDB();
