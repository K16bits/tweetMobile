const knex = require("../database/dbConfig");
const bcrypt = require('bcrypt');
require('dotenv').config({path:'../../.env'})

module.exports = {
    async store(req,res){
        const {name,password} = req.body;
        
        if(!name || !password){
            return res.status(401).json({"status":"falta de nome ou senha"})
        }

        const data = await knex('users').where('email',name).first();
        if(data){
            return res.status(409).json({"status":"Email já cadastrado"})
        }

        const hashPassword = bcrypt.hashSync(password,parseInt(process.env.SALTROUNDS));

        await knex('users').insert({
            "email":name,
            "password":hashPassword
        }).catch(erro =>{
            console.log(erro);
        })
        
        return res.status(201).json({"status":"usuario criado com sucesso"})
    }
}