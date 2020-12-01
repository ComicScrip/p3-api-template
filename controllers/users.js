const { findMany } = require('../models/user');

module.exports.getCollection = async (req, res) => {
  const users = await findMany();
  res.send(users);
};
