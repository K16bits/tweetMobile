module.exports = {
    async store(req,res){
        const {name,password} = req.body;
        console.log(name,password)
        if(!name || !password){
            return res.status(401).json({"status":"não foi passado nome e senha"})
        }
        return res.status(200).json({"status":"deu bom"})
    }
}