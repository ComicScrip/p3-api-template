const db = require('../db.js');

const findMany = async () => {
  return db.query('SELECT * FROM users');
};

const create = async (name, email) => {
  return db.query('INSERT INTO users SET name = ?, email = ?', [name, email]);
};

module.exports = { findMany, create };
