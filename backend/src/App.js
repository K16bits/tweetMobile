const express = require('express');
const router = require('./router')
const cors = require('cors')


class App {
    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors())
        this.Router();
    }
    Router(){
        this.app.use(router)
    }
}

module.exports = new App().app;

