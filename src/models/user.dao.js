const { AppDataSource } = require("./dataSource");

const createUser = async (
  email,
  password,
  nickname,
  phoneNumber,
  birthday,
  profileImage
) => {
  await AppDataSource.query(
    `
    INSERT INTO users (
      email,
      password,
      nickname,
      phone_number,
      birth_day,
      profile_image
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    )
    `,
    [email, password, nickname, phoneNumber, birthday, profileImage]
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
