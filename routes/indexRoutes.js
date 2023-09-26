const {Router} = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.json({prueba:"Db conectada"});
    console.log('Db Conectada');
} )

module.exports = router;