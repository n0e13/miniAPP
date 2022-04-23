const productDB = require('../models/product_model');

const getProducts = async (req, res) => {
    try {
        const allProducts = await productDB.getProducts();
        res.status(200).render('theme', { show: 'list', list: allProducts });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const goToForm = (req, res) => {
    try {
        res.render('theme', { show: 'form' });
    } catch (error) {
        console.log(error);
    }
}

const saveProduct = async (req, res) => {
    try {
        let imgURL = req.file.firebaseUrl;
        await productDB.createPorduct(req.body, imgURL);
        res.status(201).render('theme', { show: 'form' });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

module.exports = {
    goToForm,
    getProducts,
    saveProduct
};