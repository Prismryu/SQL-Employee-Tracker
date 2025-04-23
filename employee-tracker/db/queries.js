const client = require('./connection');

module.exports = {
  viewAllDepartments: async () => {
    const res = await client.query('SELECT * FROM department');
    return res.rows;
  },
};