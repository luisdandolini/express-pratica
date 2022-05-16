const express = require('express');
const rotasProdutos = require('./routers/rotasProdutos');
const app = express();

const port = 3000;

// Criando um servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.use('/produtos', rotasProdutos);

app.get('/', (req, res) => {
  res.send('Seção Inicial - Bem-vindo!')
});

app.get('/contato', (req, res) => {
  res.send('Página de Contatos')
});