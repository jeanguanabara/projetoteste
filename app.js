//INSTALADO NODEMON
//INSTALADO EXPRESS
//INSTALADO EJS
//IMPORTADO PATH NATIVO DO NODE PARA TRABALHAR COM O EJS
//INSTALADO MULTER


//IMPORTAÇÕES
const express = require('express')//importado express
const router = require('./src/routes/homeRoutes')
const path = require('path')

//VARIAVEIS
const port = 3000
const app = express()

//middlewares
//setando configurações
app.set('view engine', 'ejs')//CONFIGURAÇÃO PARA LEITURA DA ENGINE EJS
app.set('views',path.resolve('src','views'))
app.use(express.static(path.resolve('src','public')))//UMA VEZ QUE IMPORTO A PUBLIC PARA CÁ, ELE JÁ COLOCA NA "RAÍZ" DA APLICAÇÃO RODANDO EM TELA




//uso das rotas
app.use(router)






app.listen(port, ()=> console.log('listening on port', port))