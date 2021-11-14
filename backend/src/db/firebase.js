//Crear la conexion
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./prueba2021-2ae4d-75b8bfe6fddd.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db;