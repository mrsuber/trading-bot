// routes/data.js
const express = require('express');
const router = express.Router();
const DataManager = require('./data_manager_models');

const dataManager = new DataManager();

// Route to get data
router.get('/', async (req, res) => {
  try {
    const data = await dataManager.getData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Other routes for data manipulation

module.exports = router;