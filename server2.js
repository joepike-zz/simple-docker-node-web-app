
'use strict'

const express = require('express')

const PORT = 8080;
const HOST = '0.0.0.0'

const app = express()

app.get('/', function(req, res){
  res.send('Hello world\n')
})

app.listen(PORT, HOST)
