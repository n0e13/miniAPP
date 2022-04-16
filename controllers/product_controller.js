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

const setProduct = async (req, res) => {
    if (Object.keys(req.body) !== 0) {
        try {
            await productDB.createPorduct(req.body);
            res.status(201).render('theme', {show: 'form'});
        } catch (error) {
            res.status(400).json({ message: error });
        }
    } else {
        res.status(400).json({ message: "No hay datos para crear un producto" });
    }
}

module.exports = {
    goToForm,
    getProducts,
    setProduct
};