const { AppDataSource } = require("./dataSource");

const showThreads = async (/*매개변수(키값)*/) => {
  const test = await AppDataSource.query(
    `SELECT 
        users.id, users.nickname, users.profile_image, threads.id, threads.content, threads.updated_at
        FROM threads 
        LEFT JOIN users
        ON threads.user_id = users.id
        ORDER BY 
        threads.updated_at DESC 
    `
  );
  return test;
};

module.exports = { showThreads };
