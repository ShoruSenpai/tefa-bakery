import express from 'express';
import cors from 'cors';
import db from './config/db.js';

const app = express();
const PORT = 3080;

app.use(cors());
app.use(express.json());

// use router

app.use('/uploads', express.static('uploads'));

// get function

app.get('/test-db', async (req, res) => {
  try {
    const conn = await db.getConnection();
    await conn.ping();
    conn.release();

    res.json({
      message: 'conn ok',
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1');
    res.json({
      message: 'API & DB connected',
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get('/api/gallery', async (req, res) => {
  try {
    const [rows] = await db.query(`
    SELECT id, title, description, activity_date, image, layout, location FROM gallery ORDER BY created_at DESC 
    `);

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// post function

app.post('/api/gallery', async (req, res) => {
  const { title, description, activity_date, image, layout, location } =
    req.body;

  if (!title) {
    return res.status(400).json({
      message: 'Title wajib diisi!',
    });
  }

  try {
    const sql = `
    INSERT INTO gallery (title, description, activity_date, image, layout, location) VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(sql, [
      title,
      description,
      activity_date,
      image,
      layout || null,
      location,
    ]);

    res.status(200).json({
      message: 'Gallery berhasil ditambahkan!',
      id: result.insertId,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
