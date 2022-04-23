const express = require('express');
const helmet = require('helmet');

const { app: { PORT } } = require('./configs/env_config');
const connectMongoDB = require('./configs/mongodb_config');

const productsRouter = require('./routes/routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', productsRouter);

/**
 * Función inicial que conecta a la BBDD y lanza el servidor
 * @async
 */
const init = async () => {
    try {
        await connectMongoDB();

        app.listen(PORT, () => {
            console.log(`Example app listening at http://localhost:${PORT}`)
        })
    }
    catch (error) {
        console.log(error);
    }
}

init();