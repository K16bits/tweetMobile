const express = require('express');
const router = express.Router();

class App {
    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.app.Router;
    }
    Router(){
        this.app.use(router)
    }
}

module.exports = new App().app;