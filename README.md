Fazer o clone do Repositório

Verificar as chaves do .env.example

Instalar as dependências que estão package.json

Criar um banco de dados PostgreSQL 

Iniciar a aplicação com o seguinte comando "yarn dev"

Rodar a aplicação no local host, no Insomnia ou algum aplicativo semelhante --- "http://localhost:3000"

Dentro da aplicação, contém 4 endpoints, 1 para crição de produtos, 1 para listagem de produtos, 1 para atualização de produtos, 1 para o soft delete de produtos.

1. Criação
{
	"name": "Cadeira",
	"category": "Móveis",
	"quantity": 10
}


2.Listagem
   ** solicitar a requisição **
  
 
3.Atualização - usando o id no paramêtro
{
	"name": "Televisão",
  "category": "Eletrônicos",
  "quantity": 5
}


4.Deleção - usando o id no paramêtro
  ** solicitar a requisição **
