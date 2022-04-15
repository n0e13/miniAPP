const routes = require('express').Router();

const {
    goToForm,
    getProducts,
    setProduct
} = require('../controllers/product_controller');

routes.get('/', getProducts);

routes.get('/addproduct', goToForm)
    .post('/addproduct', setProduct);

module.exports = routes;
