const express = require('express');
const router = express.Router();
const rutaProtegidaController = require('../controllers/rutaprotegida.controller');
const { verifyToken } = require('../middlewares/verifyToken');

router.get('/', verifyToken, rutaProtegidaController.admin)

module.exports = router