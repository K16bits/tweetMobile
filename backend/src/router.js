const express = require('express');
const router = express.Router();

const create = require('./controllers/store');

router.post("/",create.store)

module.exports = router;