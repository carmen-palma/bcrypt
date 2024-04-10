const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { hashedSecret } = require('../crypto/config');

// Middleware para verificar el token
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Token no proporcionado');
  }

  jwt.verify(token, hashedSecret, (err, decoded) => {
    if (err) {
      return res.status(401).send('Token inválido');
    }
    req.userId = decoded.id;
    next();
  });
}

// Middleware para generar el token
function generateToken(user) {
  return jwt.sign({ id: user.id }, hashedSecret, {
    expiresIn: 86400 // 24 horas
  });
}

module.exports = {
  verifyToken,
  generateToken
};