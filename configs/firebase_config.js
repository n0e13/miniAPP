const admin = require("firebase-admin");
const firebaseAccount= require('../firebase.json');
const { firebase: { FB_BUCKET } } = require('./env_config');

const BUCKET = FB_BUCKET;

admin.initializeApp({
    credential: admin.credential.cert(firebaseAccount),
    storageBucket: BUCKET
});

const bucket = admin.storage().bucket();

module.exports = bucket;

