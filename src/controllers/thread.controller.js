const threads = require('../services/threads');

const createThread = async (req, res) => {
  try {
    const { userId, content } = req.body;
    await threads.createThread(userId, content);

    res.status(201).json({ message: 'successCreated' });
  } catch (err) {
    res.status(err.statusCdoe || 400).json({ message: err.message });
  }
};

module.exports = { createThread };
