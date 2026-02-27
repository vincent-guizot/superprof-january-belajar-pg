const bcrypt = require("bcrypt");
const saltRound = 10;

const encryptPwd = (pwd) => {
  let result = bcrypt.hashSync(pwd, saltRound); // hasilnya berupa enkripsi
  return result;
};

const decryptPwd = (pwd, hashedPwd) => {
  let result = bcrypt.compareSync(pwd, hashedPwd); // hasilnya hanya true or false
  return result;
};

module.exports = { encryptPwd, decryptPwd };
