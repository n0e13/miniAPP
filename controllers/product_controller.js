const productDB = require('../models/product_model');

const getProducts = (req, res) => {
    try {
        res.render('theme', { show: 'list' });
    } catch (error) {
        console.log(error);
    }
}

const goToForm = (req, res) => {
    try {
        res.render('theme', { show: 'form' });
    } catch (error) {
        console.log(error);
    }
}

const setProduct = (req, res) => {
    try {
        res.render('theme', { show: 'form' });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    goToForm,
    getProducts,
    setProduct
};