const { Client } = require('pg');
const connectionString =  process.env.DATABASE_URL;
const client = new Client({connectionString});
client.connect();

module.exports = (a, b) => {
  console.log(a,b);
  return client.query(`SELECT ${a}+${b} AS result`).then(res => res.rows[0].result);
};
