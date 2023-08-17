const thread = require("../services/threads");

const updateThread = async (req, res) => {
  try {
    const result = await thread.showThread(); // 괄호안에 키값

    res.status(200).json(result);
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { updateThread };
