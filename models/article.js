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
  image: {
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
  versionKey: false,
});

module.exports = mongoose.model('article', articleSchema);
