const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'sorter',
  password: '12345678',
  host: 'localhost',
  port: '5432',
  database: 'sorting'
});

module.exports = pool;