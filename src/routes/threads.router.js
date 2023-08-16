const express = require('express');

const threadController = require('../controllers/thread.controller');

const threadRouter = express.Router();

threadRouter.post('/threads', threadController.createThread);

module.exports = { threadRouter };
