const knex = require("../database/dbConfig");

module.exports = {
    async store(req,res){
        const {name,password} = req.body;
        console.log(name,password)
        if(!name || !password){
            return res.status(401).json({"status":"não foi passado nome e senha"})
        }
        await knex('users').insert({
            "email":name,
            "password":password
        }).then(()=>{
            console.log("deu bom")
        }).catch(erro =>{
            console.log(erro);
        })
        return res.status(200).json({"status":"deu bom"})
    }
}