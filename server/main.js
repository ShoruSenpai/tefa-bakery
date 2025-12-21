import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API success!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
