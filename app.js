const express = require('express');
const rotasProdutos = require('./routes/rotasProdutos');
const app = express();

const port = 3000;

// Criando um servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.get('/', (req, res) => {
  res.send('Bem-Vindo!!')
})

app.use('/produtos', rotasProdutos);