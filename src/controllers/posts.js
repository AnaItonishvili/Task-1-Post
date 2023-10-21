const Post = require("../models/post");

exports.createPost = async (req, res) => {
  const { title, description, category, timestamp } = req.body;
  
  try {
    const newPost = new Post({
      title,
      description,
      category,
      timestamp
    });
    
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new post" });
  }
};
