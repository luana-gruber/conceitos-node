# Desafio Conceitos Node 🚀
Essa é uma aplicação para armazenar repositórios utilizando conceitos iniciais de node.js. Permite a criação, listagem, modificação, exclusão, e recebimento "likes" dos repostórios.

# Node.js
Foram utilizadas as rotas:
- post/repositories (recebe title, url e techs do repositório dentro do corpo da requisição e armazena dentro de um objeto, com o id e o número de "likes")
- get/repositories (lista todos os repositórios)
- put/repositories/:id (altera o title, url e techs do repositório com o id do parâmetro)
- delete/repositories/:id (deleta o repositório de acordo com o id do parâmetro)
- delete/repositories/:id/like (aumenta o número de likes de um repositório específico através do id)

