const { response } = require('express');



const usuariosGet = (req, res= response) => {
    const {nombre, apellidos, email} = req.query;//todo lo que viene en el path despues de '?'.
    res.json({
        msg: 'Get API - controller',
        nombre,
        apellidos,
        email
    });
};

const usuariosPost = (req, res= response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'Post API - controller',
        nombre,
        edad
    });
};

const usuariosPut = (req, res= response) => {
    const { id } = req.params;// Se almacena en params la variable del path ":id", como id:xxxxxx
    res.json({
        msg: 'put API - controller',
        id
    });
};

const usuariosDelete = (req, res= response) => {
    res.json({
        msg: 'Delete API - controller'
    });
};

const usuariosPatch = (req, res= response) => {
    res.json({
        msg: 'Patch API - controller'
    });
};




module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}