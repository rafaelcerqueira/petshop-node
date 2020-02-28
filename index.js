const http = require ('http')
const url = require('url')
const petshop = require ("./petshop")

//console.log(http)

let server = http.createServer((request, response)=>{

    let urlCompleta = url.parse(request.url, true)

    if (urlCompleta.pathname == "/") {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        response.write("Você está na página incial")
        response.end()
    }

   if(urlCompleta.pathname == "/home") {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    response.write("Você está na homepage")
   
   }response.end()

   if(urlCompleta.pathname == "/pet/adicionar") {
      if(petshop.adicionarPets(urlCompleta.query.nome)){
          response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
          response.end('O pet foi cadastrado com sucesso')
      } else{
          response.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'})
          response.end('Erro ao tentar cadastrar o pet')
      }

   }


})

server.listen(3000, 'localhost')