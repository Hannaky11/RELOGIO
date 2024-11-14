const router = require('express').Router()

const ProdutoController = 
require('../controllers/ProdutoController')

/* Obter todos os produtos */
router.get('/todos',ProdutoController.buscarTodos)

/* Gravar um novo produto */
router.post('/novoProduto', 
    ProdutoController.cadastrar)

module.exports = router
