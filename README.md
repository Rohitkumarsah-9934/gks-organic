# GKS Organic - MERN Stack (Tailwind CSS)

Responsive website: **MongoDB + Express + React (Vite) + Node**, styling **Tailwind CSS**.

## Structure
```
gks-organic/
├── package.json        # root scripts (dev, seed, build)
├── server/             # Express + MongoDB API
│   ├── server.js
│   ├── seed.js
│   ├── config/db.js
│   ├── data/company.js
│   ├── models/ (Contact, Post)
│   └── routes/ (contact, posts)
└── client/             # React + Tailwind
    └── src/ (components, pages, api.js)
```

## Setup
1. Node 18+ aur MongoDB (local ya Atlas) chahiye.
2. `server/.env` me `MONGO_URI` set kijiye (default: `mongodb://127.0.0.1:27017/gks-organic`).
3. Terminal me:
```bash
npm install            # root (concurrently)
npm run install:all    # server + client dependencies
npm run seed           # blog posts DB me daalne ke liye
npm run dev            # server :5000 + client :5173
```
Browser me kholiye: http://localhost:5173

## Production
```bash
npm run build   # client/dist banata hai
npm start       # Express build ko serve karta hai (http://localhost:5000)
```

## API
| Method | Route | Kaam |
|---|---|---|
| GET | /api/company | company details, benefits |
| GET | /api/posts | blog list |
| GET | /api/posts/:slug | single post |
| POST | /api/contact | contact form save |
| GET | /api/contact | saved messages (production me auth lagayiye) |

## Pages
Home, About Us, Benefits, Blog (+ detail), Location (map), Contact. Mobile par neeche maroon bottom-nav aur hamburger menu, desktop par top navigation.

## Images
Abhi hero/beetroot/powder ki jagah icons aur emoji use hue hain. Apni real photos `client/public/images/` me rakh kar `Home.jsx` me `<img>` se badal sakte hain.
