const app = require('./src/App')
require("dotenv").config({path:'./.env'})

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}\nhttp://localhost:${port}`)
})