//Crear la conexion
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('../backend/prueba2021-2ae4d-75b8bfe6fddd.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();


// Add a second document with a generated ID.
/* db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});n */


// Add a new document in collection "cities"
/* db.collection("users").doc("1").set({
    nombre: "Esperanza",
    edad: 40,
    ID: 1235657
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
}); */


// Actualiza  un documento buscandlo por su ID
/* db.collection("users").doc("JBt0rjMV5NeDWtUYXbAg").update({
    Nombre: "Maria actualizado",
    ocupacion: "Streaper"
})
.then(() => {
    console.log("Document successfully updated!");
})
.catch((error) => {
    console.error("Error updating document: ", error);
}); */

/* 
// Trae un documento
db.collection("users").doc("JBt0rjMV5NeDWtUYXbAg").get()
    .then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    }); */


/* // Trae varios documentos
db.collection("users").where("ocupacion", "==", "Streaper").get()
    .then((docArray) => {
        docArray.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    }); */



/* // Trae todos documentos
db.collection("users").get()
    .then((docArray) => {
        docArray.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    }); */


db.collection("users").doc("2").delete()
    .then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });