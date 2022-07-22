const jwt = require('jsonwebtoken');
require("dotenv").config()

const auth = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  let token;
  //let tokenIsValid = false;
  /*
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  
  if (token) {
    try {
      jwt.verify(token, process.env.SECRET);
    } finally {
      tokenIsValid = true;
    }
  }
  
  */
  let tokenIsValid = true;
  req.isAuthenticated = tokenIsValid;

  next();
};

module.exports = auth;