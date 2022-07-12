const { Router } = require("express");
const routeCh = require('./RouteCh');
const routeEp = require('./RouteEp');

const router = Router();

// Configurar los routers
router.use('/characters', routeCh);
router.use('/episodes', routeEp);


module.exports = router;
