const express = require("express");

const threadController = require("../controllers/threads.controller");

const threadRouter = express.Router();

threadRouter.get('/show', threadController.updateThread);

module.exports = { threadRouter };
