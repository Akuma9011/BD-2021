const db = require('./firebase.js');

// Trae todos los usuarios de la coleccion experts
function getExperts() {
    return db.collection('experts').get()
        .then((refDoc) => {
            refDoc.forEach((doc)=>{
                console.log(doc.id, '=>', doc.data());
            })
        }) 
        .catch(err =>{
                console.error("Error al traer los datos");
            })
}


module.exports = {
    getExperts
}