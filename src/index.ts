/* import Matematica from './matematica'

let n1: number = 10
let n2: number = 20

console.log("SOMA: "+Matematica.somar(n1,n2))
console.log("SUBTRAIR: "+Matematica.subtrair(n1,n2))
console.log("multiplicar: "+Matematica.multiplicar(n1,n2)) 

import Filmes from './filmes'

console.log(Filmes) */


//importando express
import express from 'express'
import { Server} from 'http' 

//usando express
const server = express()

server.listen(3000)

server.get('/',(req,res)=>{
    res.send("Olá mundo!")
})

server.get('/Loja', (req,res) =>{
    res.send("Olá")
})

//ROTA DINAMICA
server.get('/noticia/:politica', (req, res) =>{
    let politica: string = req.params.politica
    res.send(`Noticias:${politica}`)
})

server.get('/noticia/:novela', (req, res) =>{
    let novela: string = req.params.novela
    res.send(`Noticias:${novela}`)
})

server.get('/viagens/:origem-:destino', (req, res) =>{
    let origem: string = req.params.origem
    let destino: string =req.params.destino

    res.send(`Procurando trajetos de ${origem} até ${destino}`)
})