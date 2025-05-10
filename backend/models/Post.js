const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Post', postSchema);
