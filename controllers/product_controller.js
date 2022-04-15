const productDB = require('../models/product_model');

const goToForm = (req, res) => {
    res.render('theme', { show: 'form' });
}

const getProducts = (req, res) => {
    res.render('theme', { show: 'list' });
}

const setProduct = (req, res) => {
    res.render('theme', { show: 'form' });
}

module.exports = {
    goToForm,
    getProducts,
    setProduct
};