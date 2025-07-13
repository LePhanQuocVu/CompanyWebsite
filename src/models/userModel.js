const {poolPromise} = require('../config/dbConnect');

module.exports = {
    createUser: async(email, password, role)=> {
        const pool = await poolPromise;
        await await pool.request()
        .input('email', email)
        .input('password', password)
        .input('role', role)
        .query('INSERT INTO users (email, password, role) VALUES (@email, @password, @role)');
    },
    getUserByEmail: async (email) => {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('email', email)
      .query('SELECT * FROM users WHERE email = @email');
    console.log(result.recordset[0]);
    return result.recordset[0];
  }
} 