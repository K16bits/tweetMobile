const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("aaaaaa")
})

module.exports = router;