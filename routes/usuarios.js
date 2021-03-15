const { Router } = require('express');
const { 
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
 } = require('../controllers/usuariosController');

const router = Router()



router.get('/', usuariosGet);

router.put('/:id', usuariosPut );// id es el nombre del parametro variable que recibe, se almacena en el req.params

router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/:id', usuariosDelete);





module.exports = router;