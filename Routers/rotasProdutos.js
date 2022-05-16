const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = express.Router();

router.get('/', ProdutoController.index);
router.get('/criar', ProdutoController.criarProduto);
router.get('/deletar/:id', ProdutoController.deletarProduto);
router.get('/produtos/:id?', ProdutoController.produtosId);

module.exports = router;