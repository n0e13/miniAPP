const express = require('express');
const helmet = require('helmet');

const { app: { port } } = require('./configs/env_config');
const connectMongoDB = require('./configs/mongodb_config');
const morgan = require('./configs/morgan_config');

const productsRouter = require('./routes/routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(morgan(':method / :host / :status / :query / :param / :res[content-length] / :response-time ms / :body'));

app.use('/', productsRouter);

/**
 * Función inicial que conecta a la BBDD y lanza el servidor
 * @async
 */
const init = async () => {
    try {
        await connectMongoDB();
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    }
    catch (error) {
        console.log(error);
    }
}

init();