// Use o módulo nativo fs para criar um arquivo chamado mensagem.txt e escrever o texto "Node.js é poderoso!" dentro dele.
//para usar esse modulo, usamos o metodo require do node. ficando assim const fs = require("fs")

const fs = require('fs');

try {
  fs.writeFileSync('mensagem.txt', 'Node.js é poderoso!');
  console.log('Arquivo criado com sucesso!');
} catch (err) {
  console.error('Erro ao criar o arquivo:', err);
}
