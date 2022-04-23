const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    image: String
}, {
    collection: 'products'
}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

