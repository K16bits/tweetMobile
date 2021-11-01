const express = require('express');
const router = express.Router();
const crud = require('./controllers/crud');

router.post("/",crud.store)

module.exports = router;