const threadDao = require('../models/thread.dao');

const createThread = async (userId, content) => {
  await threadDao.createThread(userId, content);
};

module.exports = { createThread };
