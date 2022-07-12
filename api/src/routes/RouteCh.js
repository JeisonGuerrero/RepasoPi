const { Router, } = require("express");
const controller = require('../Controller/index.js');




const router = Router();

// Configurar los routers
router.get('/', controller.getCharacter);

router.get('/:id', controller.getCharacterById);

router.post('/', controller.postCharacter);

module.exports = router;