 const userService = require('../services/auth.service');

const signUp = async (req, res) => {
  try {
    const {
      email,
      password,
      nickname,
      phoneNumber,
      birthday,
      profileImage
    } = req.body;
 
    await userService.signUp(email, password, nickname, phoneNumber, birthday, profileImage);

    res.status(201).json({ message : 'successCreated'});
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { signUp };