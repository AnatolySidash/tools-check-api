/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken');

// const { NODE_ENV, JWT_SECRET } = process.env;

// NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',

const JWT_SECRET = 'dev-secret';

function generateToken(payload) {
  return jwt.sign({ payload }, JWT_SECRET, { expiresIn: '7d' });
}

function checkToken(token) {
  if (!token) {
    return false;
  }

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return false;
  }
}

module.exports = { generateToken, checkToken };
