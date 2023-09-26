const {Router} = require('express')
const router = Router();

router.get('/usuarios', (req,res)=> {
    res.json([
        {nombre:"Matias", apellido:"Neira"},
        {nombre:"Esteban", apellido:"Rodriguez"},
        {nombre:"Marcos", apellido:"Farias"},
        {nombre:"Rodrigo", apellido:"Perez"}
    ]);
    console.log('Ruta Usuarios');
} )

module.exports = router;