import mongoose from 'mongoose'
import ProductSchema from '../models/models'
var Product = new mongoose.model("Product", ProductSchema);
export const addnewProduct = (req, res) => {
    let newProduct = new Product(req.body);
    let save = newProduct.save((err, Product) => {

    });


}