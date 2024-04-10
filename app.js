const express = require('express');
const session = require('express-session');
const app = express();

// Configurar Crypto y Bcrypt
const { secret, hashedSecret } = require('./crypto/config');

// Configuración sesión
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true
}));

// Ruta
const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));