require("dotenv").config()

const jwt = require('jsonwebtoken');


const signToken = (expiresIn) => {
  const token = jwt.sign({ app: 'patronus' }, process.env.SECRET, { expiresIn });
  return token;
};

module.exports = signToken;