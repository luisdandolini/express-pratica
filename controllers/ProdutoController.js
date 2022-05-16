const ProdutoController = {
  index: (req, res) => {
    res.send( "Bem-vindo ao meu servidor!");
  },

  criarProduto: (req, res) => {
    res.send("Criando um produto!");
  },

  deletarProduto: (req, res) => {
    const {id} = req.params;

    res.send("Deletando o produto com id: " + id); 
  },

  produtosId: (req, res) => {
    const {id} = req.params;

    res.send("Eu tenho um produto com o id: ", + id);
  }
}

module.exports = ProdutoController;