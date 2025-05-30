const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController');

router.get('/', controller.getUsuarios);
router.post('/', controller.postUsuario);
router.delete('/:id', controller.deleteUsuario);

module.exports = router;
