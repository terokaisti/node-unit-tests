const { Client } = require('pg');
const { DATABASE_URL, USER, PASS, HOST, DB } = process.env;
const connectionString =  DATABASE_URL || `postgres://${USER}:${PASS}@${HOST}/${DB}`;
const client = new Client({connectionString});
client.connect();

module.exports = (a, b) => {
  console.log(a,b);
  return client.query(`SELECT ${a}+${b} AS result`).then(res => res.rows[0].result);
};
