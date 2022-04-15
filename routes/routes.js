const routes = require('express').Router();

const products = require('../controllers/product_controller');

routes.get('/', (req, res) => {
    res.send('Regulinchi!')
});

module.exports = routes;
