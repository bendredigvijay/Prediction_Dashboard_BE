const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Use the built-in express.json() middleware instead of body-parser
app.use(express.json());

app.use(cors());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Include your auth routes
app.use('/api/auth', authRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

module.exports = app;
