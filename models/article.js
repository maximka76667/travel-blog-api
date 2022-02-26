const { default: mongoose } = require('mongoose');
const validator = require('validator');

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
    required: true,
    validate: {
      validator: (link) => validator.isURL(link),
      message: 'Not an image',
    },
  },
  content: {
    type: String,
    required: true,
  },
  linkName: {
    type: String,
    required: true,
    unique: true,
    // Do validation
  },
  versionKey: false,
});

module.exports = mongoose.model('article', articleSchema);
