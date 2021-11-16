const db = require('./firebase.js');
const dbE = require('./firebase.js');


//Trae todos los expertos
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


//Trae un experto
function getExpert(eid, callback){
    return db.collection('experts').doc(eid).get()
    .then((doc)=>{
        callback(doc.data());
    })
    .catch((err=>{
       callback("Ha ocurrio un error");
    }))
}

//Agrega un experto
function addExpert(expert,callback){
    return db.collection('experts').add(expert)
    .then(()=>{
        callback("Expert created...!!");
    })
    .catch((error)=>{
        callback('Error to add expert...!!!');
    })
}

//Actualizar un experto
function updateExpertTotally(eid, expert, callback){
    return dbE.collection('experts').doc(eid).set(expert)
    .then(()=>{
        callback('Success');
    })
    .catch((err)=>{
        callback("Fallo al actualizar");
    })
}


//Actualizar experto parcialmente
function updateExpertPartial(eid, expert, callback){
    return dbE.collection('experts').doc(eid).update(expert)
    .then(()=>{
        callback('Actualizado parcialmente');
    })
    .catch((err)=>{
        callback('Hubo un error en la actualizacion');
    })
}


//Borrar un experto
function deleteExpert(eid, callback){
    return dbE.collection('experts').doc(eid).delete()
    .then(()=>{
        callback("Borrado exitoso");
    })
    .catch((err)=>{
        callback('Error al borrar')
    })

}







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


module.exports = {
    getExperts,
    getExpert,
    addExpert,
    updateExpertTotally,
    updateExpertPartial,
    deleteExpert
}

