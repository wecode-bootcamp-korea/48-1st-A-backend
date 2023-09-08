const threadDao = require('../models/thread.dao');

const showThread = async () => {
  return await threadDao.showThreads();
};

const createThread = async (userId, content) => {
  await threadDao.createThread(userId, content);
};

const modifyThread = async (content, id) => {
  await threadDao.modifyThread(content, id);
};

const deleteThread = async (id) => {
  await threadDao.deleteThread(id);
};

module.exports = { showThread, createThread, modifyThread, deleteThread };