const dbE = require('./firebase.js');

/* // Trae todos los usuarios de la coleccion experts
function getExperts() {
    return dbE.collection('experts').get()
        .then((refDoc) => {
            refDoc.forEach((doc)=>{
                console.log(doc.id, '=>', doc.data());
            })
        }) 
        .catch(err =>{
                console.error("Error al traer los datos");
            })
}
 */

function getExperts(callback) {
    return dbE.collection('experts').get()
        .then((refDoc) => {
            var arrayExperts = [];
            refDoc.forEach((doc) => {
                arrayExperts.push(doc.data());
                //console.log(doc.id, '=>', doc.data());
            })
            callback(arrayExperts);
        })
        .catch(err => {
            //console.error(`Error to get experts ${err}`);
            callback(`Error to get experts ${err}`);
        })
}


module.exports = {
    getExperts
}