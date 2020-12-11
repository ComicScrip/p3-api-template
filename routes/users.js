const usersRouter = require('express').Router();
const expressAsyncHandler = require('express-async-handler');
const { getCollection } = require('../controllers/users');

usersRouter.get('/', expressAsyncHandler(getCollection));

module.exports = usersRouter;
