import { Router } from 'express';
import Post from '../models/Post.js';

const router = Router();

// GET /api/posts
router.get('/', async (_req, res) => {
  try {
    const posts = await Post.find().select('-content').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Posts load nahi ho paye' });
  }
});

// GET /api/posts/:slug
router.get('/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: 'Post nahi mila' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
