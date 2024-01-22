// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login route
router.post('/login', authController.login);

// Fetch Fuel and Weather Data route
router.get('/fetchFuelAndWeatherData', authController.fetchFuelAndWeatherData);

module.exports = router;
