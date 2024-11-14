const express = require('express')
const cors = require('cors')
const app = express()
const ClienteRoutes = require('./routes/ClienteRoutes')
const ProdutoRoutes = require('./routes/ProdutoRoutes')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

app.use(express.static('public'))

/* HABILITAR USO DE ROTAS PELO EXPRESS */
app.get('/',(req,res)=>{
    res.json({mensagem: "API rodando"})
})
app.use('/clientes',ClienteRoutes)
app.use('/produtos',ProdutoRoutes)

//Configuração de resposta do JSON


app.listen(5000)