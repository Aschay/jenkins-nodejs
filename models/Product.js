
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  brand : String ,
  serviceTag : String
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;