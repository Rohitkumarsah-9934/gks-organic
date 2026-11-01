import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import company from './data/company.js';
import contactRoutes from './routes/contact.js';
import postRoutes from './routes/posts.js';

dotenv.config();
connectDB();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://gks-organic-lovr.vercel.app",
  "https://gks-organic-lovr-6w6203a6v-rohitkumarsah-9934s-projects.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/api/company', (_req, res) => res.json(company));
app.use('/api/contact', contactRoutes);
app.use('/api/posts', postRoutes);

// Production: serve built React app
const clientDist = path.join(__dirname, '../client/dist');
app.use(express.static(clientDist));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(clientDist, 'index.html'), (err) => err && next());
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
