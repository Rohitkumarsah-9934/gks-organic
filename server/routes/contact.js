import { Router } from 'express';
import Contact from '../models/Contact.js';

const router = Router();

// POST /api/contact  - save a contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const saved = await Contact.create({ name, email, phone, message });
    res.status(201).json({ success: true, message: 'Shukriya! Hum jaldi aapse sampark karenge.', id: saved._id });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: errors.join(', ') });
    }
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error, baad me try kijiye.' });
  }
});

// GET /api/contact - list messages (simple, add auth before production use)
router.get('/', async (_req, res) => {
  try {
    const items = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
