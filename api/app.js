const express = require('express');
const cors = require('cors');
const dataRouter = require('./data_routes');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection/mongodb://db:27017
mongoose.connect('mongodb://db:27017/trading_bot', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ Error connecting to MongoDB:', err));

app.use(cors());
app.use(express.json());

app.use('/api/data', dataRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});