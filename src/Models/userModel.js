// Models/userModel.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`;

pool.query(createUserTableQuery, (err, result) => {
  if (err) {
    console.error('Error creating users table:', err.message);
  } else {
    console.log('Users table created successfully');
  }
});

module.exports = pool;
