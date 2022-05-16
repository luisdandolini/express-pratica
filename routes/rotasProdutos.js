const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');


router.get('/home', ProdutoController.index);
router.get('/criar', ProdutoController.criarProduto);
router.get('/deletar/:id', ProdutoController.deletarProduto);
router.get('/produto/:id?', ProdutoController.produtosId);

module.exports = router;