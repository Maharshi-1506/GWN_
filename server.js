const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/goodwillnet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const postSchema = new mongoose.Schema({
    description: String,
    location: String,
    category: String,
    image: String,
});

const Post = mongoose.model('Post', postSchema);

// Get Posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Create a Post
app.post('/posts', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
