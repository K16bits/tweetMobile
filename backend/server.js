const app = require('./src/App')
const port = 3333

app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}\nhttp://localhost:${port}`)
})