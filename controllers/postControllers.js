const Post = require('../models/Post')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getPosts = async (req, res) => {
  try {
    const Posts = await Post.find()
    res.json(Posts)
	} 
	catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getPost = async (req, res) => {
  try {
    const { id } = req.params
    const Post = await Post.findById(id)
    if (Post) {
      return res.json(Post)
    }
    res.status(404).json({ message: 'Post not found!' })
	} 
	catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createPost = async (req, res) => {
  try {
    const Post = await new Post(req.body)
    await Post.save()
    res.status(201).json(Post)
	} 
	catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updatePost = async (req, res) => {
  const { id } = req.params
  await Post.findByIdAndUpdate(id, req.body, { new: true }, (error, Post) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!Post) {
			return res.status(404).json({ message: 'Post not found!' })
		}
      res.status(200).json(Post)
  })
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Post deleted")
    }
    throw new Error("Post not found")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createPost,
  getPost,
  getPost,
  updatePost,
  deletePost
}