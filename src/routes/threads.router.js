const express = require('express');
const { loginRequired } = require('../utils/authorization');

const threadController = require('../controllers/threads.controller');

const threadRouter = express.Router();

threadRouter.post('/contentUp', loginRequired, threadController.createThread);
threadRouter.post(
  '/contentModify',
  loginRequired,
  threadController.modifyThread
);
threadRouter.delete(
  '/contentDelete',
  loginRequired,
  threadController.deleteThread
);

//Comment
threadRouter.post('/commentUp', loginRequired, threadController.createComment);
threadRouter.post(
  '/commentDelete',
  loginRequired,
  threadController.deleteComment
);
module.exports = { threadRouter };
