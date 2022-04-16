const Product = require('./product_schema');

const getProducts = async () => {
    try {
        return await Product.find({});
    } catch (error) {
        throw error
    }
}

const createPorduct = async (product) => {
    try {
        console.log('dentro');
        const newProduct = new Product(product);
        await Product.create(newProduct);
    } catch (error) {
        throw error
    }
}

module.exports = {
    getProducts,
    createPorduct
}