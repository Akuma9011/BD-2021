const express = require('express');
const app = express();

const dbE = require('./src/db/crudExperts.js');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World')
  })
app.listen(3000)


app.get('/get-experts', function(req, res){
    dbE.getExperts(function(arrayExperts){
        res.send(arrayExperts);
    })    
})





/* app.get('/ciudad/:id', function(req, res){
    const cid = req.params.id;
    //Consulta l abase de datos y trae Medellin
    res.send(cid + ' Medellin');
}) */