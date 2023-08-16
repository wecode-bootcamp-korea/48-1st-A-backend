const { AppDataSource } = require('./data-source');

const createThread = async (userId, content) => {
  await AppDataSource.query(
    `INSERT INTO threads (user_id, content) VALUES (?,?)`,
    [userId, content]
  );
};

module.exports = { createThread };
