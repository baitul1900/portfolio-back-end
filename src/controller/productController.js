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

module.exports = { createProduct, getAllProducts }