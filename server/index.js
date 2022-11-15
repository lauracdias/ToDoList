const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000
const rotaItemToDoList = require('./routes/routesToDoList')
const cors = require('cors')

// obter os dados no formato json
app.use(express.json())

app.use(cors())

mongoose.connect(process.env.MONGO_DB)
.then(() => console.log("Conectado ao banco de dados"))
.catch(err => console.log(err))

app.use('/', rotaItemToDoList)

// porta para a conexão com o servidor
app.listen(PORT, () => console.log("Conectado ao servidor"))

