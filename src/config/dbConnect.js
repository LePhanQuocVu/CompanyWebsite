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

async function connectDB() {
  try {
    await sql.connect(config);
    console.log('Connected to MSSQL');
  } catch (err) {
    console.error('Connection failed:', err);
  }
}

module.exports = {
    sql, connectDB
}
