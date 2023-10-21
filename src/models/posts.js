const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  timestamp: Number,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
