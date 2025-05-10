const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().populate('owner', 'username');
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const { title, description, image, link, ownerId } = req.body;
  const post = new Post({ title, description, image, link, owner: ownerId });
  await post.save();
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).send("Not found");
  
  if (post.owner.toString() !== req.body.ownerId && req.body.role !== 'admin') {
    return res.status(403).send("Unauthorized");
  }

  await post.deleteOne();
  res.send("Deleted");
};
