const { NODE_ENV, DB_URL } = process.env;
const config = {};

config.ALLOWED_CORS = [
  'localhost:3000',
  'http://localhost:3000',
  'localhost:3001',
  'http://localhost:3001',
  'localhost:5000',
  'http://localhost:5000',
];

config.DEFAULT_ALLOWED_METHODS = 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS';
config.JWT_SECRET_DEV = 'jwt-secret';
config.DB_URL = NODE_ENV === 'production' ? DB_URL : 'mongodb://localhost:27017/blogdb';

module.exports = config;
