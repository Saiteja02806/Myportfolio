const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins for testing; tighten later
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

// Simple API route
app.get('/api/hello', (req, res) => {
  res.json({
    msg: 'Hello from backend!',
    time: new Date().toISOString()
  });
});

// 404 fallback
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
