const { AppDataSource } = require('./data-source');

const createUser = async (
  email,
  password,
  nickname,
  profileImage,
  phoneNumber,
  birthDay
) => {
  await AppDataSource.query(
    `
    INSERT INTO users (
      email,
      password,
      nickname,
      profile_image,
      phone_number,
      birth_day
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    );
    `,
    [email, password, nickname, profileImage, phoneNumber, birthDay]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
      SELECT *
      FROM users u
      WHERE u.email = ?
    `,
    [email]
  );

  return user;
};

module.exports = { createUser, getUserByEmail };
