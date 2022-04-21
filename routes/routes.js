const routes = require('express').Router();
const multer = require('../configs/multer_config')
const uploadImage = require('../middleware/uploadImage');

const {
    goToForm,
    getProducts,
    saveProduct
} = require('../controllers/product_controller');

routes.get('/', getProducts);

routes.get('/addproduct', goToForm);
routes.post('/addproduct', multer.single("product_img"), uploadImage, saveProduct);

module.exports = routes;
