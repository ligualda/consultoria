const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve o cartão na raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cartao-lieverthon-gualda.html'));
});

app.listen(PORT, () => {
  console.log(`Cartão rodando na porta ${PORT}`);
});
