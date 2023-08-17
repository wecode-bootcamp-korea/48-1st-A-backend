const { AppDataSource } = require('./dataSource');

const createThread = async (userId, content) => {
  await AppDataSource.query(
    `INSERT INTO threads (user_id, content) VALUES (?,?)`,
    [userId, content]
  );
};

const modifyThread = async (content, id) => {
  await AppDataSource.query(`UPDATE threads SET content = ? where id = ?`, [
    content,
    id,
  ]);
};

const deleteThread = async (id) => {
  await AppDataSource.query(`DELETE FROM Threads WHERE id = ?`, [id]);
};

const createComment = async (userId, content, threadId) => {
  await AppDataSource.query(
    `INSERT INTO thread_comments (user_id, content, thread_id) VALUES (?,?,?)`,
    [userId, content, threadId]
  );
};

const deleteComment = async (id) => {
  await AppDataSource.query(`DELETE FROM thread_comments WHERE id = ?`, [id]);
};

const threadDetail = async();

module.exports = {
  createThread,
  modifyThread,
  deleteThread,
  createComment,
  deleteComment,
};
