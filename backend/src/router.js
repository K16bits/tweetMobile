const express = require('express');
const router = express.Router();

const create = require('./controllers/store');
const login = require('./controllers/login');

router.post("/store",create.store)
router.post("/login",login.login)

module.exports = router;