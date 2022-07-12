const { Router } = require("express");
const controller = require('../Controller/index.js')
// const { Character, Episode } = require('../db.js')


const router = Router();

// Configurar los routers
router.get('/', controller.getCharacter);

// router.post('/', async (req, res)=>{
//     try {
//         let {
//             name,
//             species,
//             origin,
//             image,
//             created,
//             episode,
//           } = req.body;
//         const newCharacter = await Character.create({
//             name,
//             species,
//             origin,
//             image,
//             created,
//         })

//     } catch (error) {
//         console.log(error);
//     }
// });

module.exports = router;