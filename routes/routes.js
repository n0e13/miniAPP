const routes = require('express').Router();
const multer = require('../configs/multer_config')
const firebaseStorage = require('../configs/firebase_config');
//TODO: pasar a un middleware y separar la configuracion del firebase

const {
    goToForm,
    getProducts,
    saveProduct
} = require('../controllers/product_controller');

routes.get('/', getProducts);

routes.get('/addproduct', goToForm);
routes.post('/addproduct', multer.single("product_img"), firebaseStorage, saveProduct);

module.exports = routes;
