const express = require('express');
require('dotenv').config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // Middlewares.
        this.middlewares();
        // Routes
        this.routes();
    }

    middlewares() {

        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'get API'
            })
        });
        this.app.put('/', (req, res) => {
            res.json({
                msg: 'put API'
            })
        });
        this.app.post('/', (req, res) => {
            res.json({
                msg: 'post API'
            })
        });
        this.app.delete('/', (req, res) => {
            res.json({
                msg: 'delete API'
            })
        });

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor activo en puerto: ${this.port}\nPath: http://localhost:${this.port}`);
        });
    }
};


module.exports = Server;