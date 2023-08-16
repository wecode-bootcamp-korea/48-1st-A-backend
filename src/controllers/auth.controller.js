const authService = require('../services/auth.service');

const signUp = async (req, res) => {
  try {
    const { email, password, nickname, profileImage, phoneNumber, birthDay } =
      req.body;

    await authService.signUp(
      email,
      password,
      nickname,
      profileImage,
      phoneNumber,
      birthDay
    );

    res.status(201).json({ message: 'succesCreated' });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const accessToken = await authService.signIn(email, password);

    res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { signUp, signIn };
