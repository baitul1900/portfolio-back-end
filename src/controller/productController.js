const product = require('../models/product');
const categoris = require('../models/CategoryModel');
const subCategoris = require('../models/SubCategory');
const mongoose = require('mongoose');

let ObjectId = mongoose.Types.ObjectId;



const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const result = await product.create({
            ...reqBody,
            isDeleted: false,
        });
        return res.status(201).json({ status: "success", data: result });
    } catch (err) {
        console.error('Error creating product:', err);
        return res.status(500).json({ status: "fail", error: err.message });
    }
};




const updateProduct = async (req, res) => {
    try {
        let reqBody = req.body;
        let result = await product.updateOne({ _id: reqBody._id }, reqBody);
        return res.status(200).json({ status: "success", data: result });
    } catch (err) { 
        return res.status(500).json({ status: "fail", data: err });
    }
};



const getAllProducts = async (req, res) => {
    try {
        const products = await product.aggregate([
            {
                $lookup: {
                    from: "subcategories",
                    localField: "subCategory",
                    foreignField: "_id",
                    as: "subCategory",
                },
            },
            {
                $unwind: "$subCategory",
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "subCategory.parentCategory",
                    foreignField: "_id",
                    as: "subCategory.parentCategory",
                },
            },
            {
                $unwind: "$subCategory.parentCategory",
            },
            
        ]);

        return res.status(200).json({ status: "success", data: products });
    } catch (err) {
        console.error("Error fetching products:", err);
        return res.status(500).json({ status: "fail", error: err.message });
    }
};


// delete product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await product.findByIdAndDelete(id);
        if (!products) {
            return res.status(404).json({ status: 'fail', message: 'Product not found' });
        }
        return res.status(200).json({ status: 'success', message: 'Product deleted successfully' });
    }
    catch (e) {
        console.error('Error in deleteProduct:', e);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}



module.exports = { createProduct, getAllProducts, deleteProduct, updateProduct }