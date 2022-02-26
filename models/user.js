const { default: mongoose } = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      // Create messages
      message: 'Not email',
    },
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  versionKey: false,
});

module.exports = mongoose.model('user', userSchema);
