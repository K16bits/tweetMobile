const knex = require("../database/dbConfig");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    async store(req,res){
        const {name,password} = req.body;
        console.log(name,password)
        if(!name || !password){
            return res.status(401).json({"status":"falta de nome ou senha"})
        }

        const hashPassword = bcrypt.hashSync(password,saltRounds);

        await knex('users').insert({
            "email":name,
            "password":hashPassword
        }).then(()=>{
            console.log("deu bom")
        }).catch(erro =>{
            console.log(erro);
        })
        
        return res.status(200).json({"status":"deu bom"})
    }
}