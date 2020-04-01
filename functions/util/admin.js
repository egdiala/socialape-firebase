const admin = require("firebase-admin");

var serviceAccount = require("../socialape-5c0f6-firebase-adminsdk-jbjq3-1dfdc5a44a.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://socialape-5c0f6.firebaseio.com",
    storageBucket: "socialape-5c0f6.appspot.com"
});

const db = admin.firestore();

//cors setup include it before you do this
//run npm install cors if its not in package.json file
const cors = require("cors")({ origin: true });

module.exports = { admin, db, cors };