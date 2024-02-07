const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// const corsOptions = {
//   origin: process.env.ALLOWED_CLIENTS.split(','),
// }

app.use(cors());
app.use(bodyParser.json());

// Initialize physioAvailability with default values
let physioAvailability = Array(2).fill().map(() => Array(7).fill().map(() => Array(24).fill({state: 'vacant'})));

app.get('/api/availability', (req, res) => {
  res.json(physioAvailability);
});

app.post('/api/availability', (req, res) => {
  const { physioId, availability } = req.body;
  physioAvailability[physioId] = availability;
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
