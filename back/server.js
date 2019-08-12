const express = require('express');
const app = express();
//var routes = require('./routes/routes')
const bodyParser = require('body-parser');
const path = require('path')
const db = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
})


db.sync({force: false})
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(3000);
    console.log('Servidor escuchando en el puerto 3000');
  })
  .catch(console.error);