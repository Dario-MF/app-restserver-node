const express = require('express');
const cors = require('cors');
require('dotenv').config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        // Middlewares.
        this.middlewares();
        // Routes
        this.routes();
    }

    middlewares() {
        // cors
        this.app.use( cors() );
        // lectura y parsing de body
        this.app.use( express.json() );
        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
       this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor activo en puerto: ${this.port}\nPath: http://localhost:${this.port}`);
        });
    }
};


module.exports = Server;