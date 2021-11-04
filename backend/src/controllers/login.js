const knex = require('../database/dbConfig')
const bcrypt = require('bcrypt')

module.exports = {
    async login(req,res){
        const {name,password} = req.body;
        
        if(!name || !password){
            return res.status(401).json({"status":"falta de email ou senha"})
        }

        const data = await knex('users').select('*').where('email',name).first()

        if(!data){
            return res.status(401).json({"status":"Email inválido"})
        }

        if(!(bcrypt.compareSync(password,data.password))){
            return res.status(401).json({"status":"Senha inválida"})
        }

        return res.status(200).send(data)
    }
}