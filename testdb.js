require('dotenv').config();
const pool = require('./src/services/postgresql/DatabaseConfig');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected:', res.rows[0]);
  }
  pool.end();
});
