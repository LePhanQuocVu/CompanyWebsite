var sql = require('mssql');
require('dotenv').config();

const config = {
  user: `${process.env.DB_USER}`,
  password:  `${process.env.DB_PASS}`,
  server: 'localhost',   
  database: 'CompanyWebsite',
  options: {
    encrypt: true,          
    trustServerCertificate: true 
  }
};
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('MSSQL Connected');
    return pool;
  })
  .catch(err => console.log('DB Connection Failed:', err));

module.exports = {
  sql, poolPromise
};