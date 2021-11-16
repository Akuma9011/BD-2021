const { response } = require('express');
const express = require('express');
const app = express();
const dbE = require('./src/db/crudExperts.js');
const db = require('./src/db/firebase.js');
//const axios = require('axios').default;
const axios = require('axios');


// Para paginas estaticas .html
//app.use(express.static('public'));

//Para poder usar json en peticiones
app.use(express.json());


// Mensaje Hola en la pagina principal
app.get('/', function (req, res) {
    res.send('Bienvnido')
})
// Se activa el servidor en el perto 3000
app.listen(3000)


//Traer tods los expertos
app.get('/get-experts', function (req, res) {
    dbE.getExperts(function (arrayExperts) {
        res.send(arrayExperts);
    })
})



//Traer un solo experto
app.get("/get-expert/:id", function (req, res) {
    const eid = req.params.id;
    dbE.getExpert(eid, function (expert) {
        res.json(expert);
    })
})



// Agregar un experto
app.post("/add-expert", (req, res) => {
    const expert = req.body;
    dbE.addExpert(expert, function (response) {
        res.send(response);
    })
})

//Actualizar un experto
app.put("/update-expert-totally/:id", (req, res) => {
    const eid = req.params.id;
    const expert = req.body;
    dbE.updateExpertTotally(eid, expert, function (response) {
        res.send(response);
    })
})

//Actualizado parcialmente
app.patch("/update-partial/:id", (req, res) => {
    const eid = req.params.id;
    const expert = req.body;
    dbE.updateExpertPartial(eid, expert, (response) => {
        res.send(response);
    })
})

//Borradode experto
app.delete('/delete-expert/:id', (req, res) => {
    const eid = req.params.id;
    dbE.deleteExpert(eid, (response) => {
        res.send(response);
    })
})



//Traer paises
app.post("/experts-country", (req, res) => {
    const expert = req.body;
    const country = expert.location;

    axios.get('https://restcountries.com/v3.1/name/' + country)
        .then(function (response) {
            expert.language = response.data[0].languages;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            dbE.addExpert(expert, function (response) {
                res.send(response);
            });
        })
})



/* app.get('/ciudad/:id', function(req, res){
    const cid = req.params.id;
    //Consulta l abase de datos y trae Medellin
    res.send(cid + ' Medellin');
}) */