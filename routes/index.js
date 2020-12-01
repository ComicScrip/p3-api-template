const usersRoutes = require('./users');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/users', usersRoutes);
  // app.use('/things', thingsRoutes);
};
