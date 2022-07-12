const { Router } = require("express");
const controller = require('../Controller/index.js')

const router = Router();

// Configurar los routers
router.get('/', controller.getAllEpisodes);

module.exports = router;