const express = require('express');
const router = express.Router();

// Ruta de inicio
router.get('/', (req, res) => {
  if (req.session.loggedin) {
    res.send('Bienvenido al dashboard');
  } else {
    res.send('Por favor inicia sesión');
  }
});

// Ruta de login
router.post('/login', (req, res) => {
  
});

// Ruta de logout
router.post('/logout', (req, res) => {
  
});

module.exports = router;