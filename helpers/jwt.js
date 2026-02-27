const jwt = require("jsonwebtoken");
const secretCode = "bebas";

const generateToken = (user) => {
  const { id, username, email } = user;
  const accessToken = jwt.sign(
    {
      id,
      username,
      email,
    },
    secretCode,
    {
      expiresIn: "7d",
    },
  );

  return accessToken;
};

const verifyToken = (token) => {
  const result = jwt.verify(token, secretCode);
  return result;
};

module.exports = { generateToken, verifyToken };
