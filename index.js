const express = require('express');
const os = require("os")

const app = express()
const port = 80

const pokeneas = [
    {"id" : "1", "Nombre":"Pikachu", "altura":"20", "Habilidad":"Electrico", "frase_Filosofica":"Pika pika"},
    {"id" : "2", "Nombre":"Bulbasur", "altura":"30", "Habilidad":"Planta", "frase_Filosofica":"No es mi culpa ser el menos escogidos de los 3 iniciales"},
    {"id" : "3", "Nombre":"Squirle", "altura":"20", "Habilidad":"Agua", "frase_Filosofica":"Eternamente el mejor de las primeras opciones"},
    {"id" : "4", "Nombre":"Charmander", "altura":"23", "Habilidad":"Fuego", "frase_Filosofica":"Ser un dragon no te hace tipo dragon, el personaje"},
    {"id" : "5", "Nombre":"Abra", "altura":"40", "Habilidad":"Psiquico", "frase_Filosofica":"*Huye*"},
    {"id" : "6", "Nombre":"Ralts", "altura":"15", "Habilidad":"Psiquico", "frase_Filosofica":"Todo es relativo, incluso la vida misma"},
    {"id" : "7", "Nombre":"Pigeot", "altura":"20", "Habilidad":"Volador", "frase_Filosofica":"En el cielo todo se ve más pequeño"},
    {"id" : "8", "Nombre":"Cubone", "altura":"11", "Habilidad":"Tierra", "frase_Filosofica":"Suave como el amor de mamá"},
]

app.get('/', (req, res) =>{
    const id = Math.floor(Math.random() * Object.keys(pokeneas).length)
    res.send("Id: "+pokeneas[id].id+" Nombre: "+pokeneas[id].Nombre+" Altura: "+pokeneas[id].altura+" Habilidad: "+pokeneas[id].Habilidad+" - Container Id: "+os.hostname())
});

app.get('/frases', (req, res) =>{
    const id = Math.floor(Math.random() * Object.keys(pokeneas).length)
    res.send(pokeneas[id].frase_Filosofica+" - Container Id: "+os.hostname())
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
