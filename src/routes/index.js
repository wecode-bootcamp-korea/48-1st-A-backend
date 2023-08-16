const express = require('express');

const { authRouter } = require('./user.router');
const { threadRouter } = require('./threads.router');

const routes = express.Router();

routes.use('/user', authRouter);
routes.use('/user', threadRouter);

module.exports = { routes };
