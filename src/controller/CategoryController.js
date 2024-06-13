const mongoose = require('mongoose');
const categoryModel = require('../models/CategoryModel');
const subCategoryModel = require('../models/SubCategory');

let ObjectId = mongoose.Types.ObjectId;

const createCategory = async (req, res) => {
    try {
        let reqBody = req.body;
        let result = await categoryModel.create(reqBody);
        return res.status(200).json({ status: "success", data: result });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
};




const updateCategory = async (req, res) => {
    try {
        let reqBody = req.body;
        let result = await categoryModel.updateOne({ _id: reqBody._id }, reqBody);
        return res.status(200).json({ status: "success", data: result });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
};


const createSubCategory = async (req, res) => {
    try {
        const { name, description, parentCategory } = req.body;

        // Validate if parent category exists
        const parentCategoryExists = await categoryModel.findById(parentCategory);
        if (!parentCategoryExists) {
            return res.status(400).json({ status: "fail", data: "Parent category does not exist" });
        }

        // Create the subcategory
        const subCategory = new subCategoryModel({
            name,
            description,
            parentCategory,
        });

        await subCategory.save();
        return res.status(201).json({ status: "success", data: subCategory });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err.message });
    }
};

const getAllCategoriesWithSubCategories  = async (req, res) => {
    try {
        const categories = await categoryModel.aggregate([
            {
                $lookup: {
                    from: "subcategories",
                    localField: "_id",
                    foreignField: "parentCategory",
                    as: "subcategories",
                },
            },
            {
                $project: {
                    _id: 1,
                    description: 1,
                    name: 1,
                    subcategories: 1,
                },
            },
            {
                $addFields: {
                    subcategoriesCount: {
                        $size: "$subcategories",
                    },
                },
            }

        ])

        return res.status(200).json({ status: "success", data: categories });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
}



module.exports = {
    createCategory, updateCategory, createSubCategory, getAllCategoriesWithSubCategories
}