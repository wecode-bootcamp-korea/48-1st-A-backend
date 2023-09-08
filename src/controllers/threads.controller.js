const threads = require('../services/threads');
const threadComments = require('../services/thread.comment');

const createThread = async (req, res) => {
  try {
    const { content } = req.body;
    const user = req.user;
    await threads.createThread(user.id, content);

    res.status(201).json({ message: 'successCreated' });
  } catch (err) {
    res.status(err.statusCdoe || 400).json({ message: err.message });
  }
};

const modifyThread = async (req, res) => {
  try {
    const { content, id } = req.body;
    await threads.modifyThread(content, id);

    res.status(201).json({ message: 'successModify' });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};


const updateThread = async (req, res) => {
  try {
    const result = await threads.showThread(); // 괄호안에 키값

    res.status(200).json(result);
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};




const deleteThread = async (req, res) => {
  try {
    const { id } = req.body;
    await threads.deleteThread(id);

    res.status(201).json({ message: 'successDelete' });
  } catch (err) {
    res.status(err.stausCode || 400).json({ message: err.message });
  }
};

const createComment = async (req, res) => {
  try {
    const { content, threadId } = req.body;
    const user = req.user;
    await threadComments.createComment(user.id, content, threadId);

    res.status(201).json({ message: 'createdComment' });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.body;
    await threadComments.deleteComment(id);

    res.status(201).json({ message: 'deleteComment' });
  } catch (err) {
    res.status(err.stausCode || 400).json({ message: err.message });
  }
};

module.exports = {
  createThread,
  modifyThread,
  deleteThread,
  createComment,
  deleteComment,
  updateThread
};
