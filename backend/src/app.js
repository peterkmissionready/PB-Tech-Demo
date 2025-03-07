const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/index');
const Laptop = require('./models/laptop');
const cors = require('cors');


dotenv.config();

const app = express();
app.use(cors());

app.get('/laptops', async (req, res) => {
  const params = {} // req.query
  try {
    const laptops = await Laptop.find(params);

    if (!laptops) {
      return res.status(404).json({ message: 'laptop not found' });
    }

    res.json(laptops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/add', async (req, res) => {
  
});

module.exports = app;
