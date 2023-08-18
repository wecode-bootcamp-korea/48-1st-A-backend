const threadDao = require('../models/thread.dao');

const createComment = async (userId, content, threadId) => {
  await threadDao.createComment(userId, content, threadId);
};
const deleteComment = async (id) => {
  await threadDao.deleteComment(id);
};

module.exports = { createComment, deleteComment };
