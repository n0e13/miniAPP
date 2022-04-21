/** Paquete dotenv */
const dotenv = require('dotenv');
dotenv.config();

/** Librería de claves */
const aka = {
    app: {
        PORT: process.env.PORT
    },
    mongo: {
        MONGO_URI: process.env.DBMONGO_URI
    },
    firebase: {
        FB_BUCKET: process.env.FB_BUCKET
    }
};

module.exports = aka;