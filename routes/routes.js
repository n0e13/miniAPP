const routes = require('express').Router();

const products = require('../controllers/product_controller');

routes.get('/', (req, res) => {
    res.render('theme');
});

module.exports = routes;
