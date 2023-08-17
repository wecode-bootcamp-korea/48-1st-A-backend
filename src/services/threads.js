const threadDao = require("../models/thread.dao");

const showThread = async () => {
  return await threadDao.showThreads();
};

module.exports = { showThread };
