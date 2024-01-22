const modelData = [
  
];


// Predicted data
const fuelData = [
  {country: 'Brazil', meFuelCones: '800.00 kg/h', aeFuelCones: '150.85 kg/h', meRPM: '65.40 rpm ME RPM', tcRPM: '450.00 V DG1 Volt. UV' },
];

// Actual data
const actualFuelData = [
  {country: 'Brazil', meFuelCones: '988.00 kg/h', aeFuelCones: '250.85 kg/h', meRPM: '75.40 rpm ME RPM', tcRPM: '950.00 V DG1 Volt. UV' },
];

exports.login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.status(200).json({ message: 'Login successful' });
};

exports.fetchFuelAndWeatherData = (req, res) => {
  try {

    const weatherData = {
      date: {
        '2024-01-02': 'good',
        '2024-01-17': 'moderate',
        '2024-01-23': 'bad'
      }
    };
    res.json({ fuelData, actualFuelData, weatherData });
  } catch (error) {
    console.error('Error fetching fuel and weather data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


