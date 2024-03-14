// const productModel = require("../models/productModel");
// const brandModel = require("../models/brandModel");
// const categoryModel = require("../models/categoryModel");
// const mongoose = require('mongoose')
// const ObjectId = mongoose.Types.ObjectId;




// // create product
// exports.createProduct = async (req, res)=> {
//     try {
//         let reqBody = req.body;
//         let result = await productModel.create(reqBody);
//         return res.status(200).json({status : "success", data: result});
//     }

//     catch (e) {
//         return res.status(500).json({status: "fail", messages: "something went wrong"})
//     }
// }


// // get all product
// exports.productList = async (req, res)=> {
//     try {
//         const product = await productModel.find();
//         return res.status(200).json({status: "success", data: product});
//     }
//     catch(e) {
//         return res.status(500).json({status: "fail", messages: "something went wrong"}) 
//     }
// }


// exports.productByBrand = async (req, res)=> {
//     try {
//         let brandId =new ObjectId(req.params.brandID);
//         let matchStage = {$match: {brandID: brandId}};

//         let joinStageWithBrand = {$lookup: {from:"brands", localField: "brandID" , foreignField: "_id", as : "brand"}};
//         let joinStageWithCategory = {$lookup: {from:'categories', localField: 'categoryID', foreignField: '_id', as: 'category'}};

//         let unwindBrand = {$unwind: '$brand'}
//         let unwindCategory = {$unwind: '$category'}

//         let projection = {$project:{'brand._id': 0, 'brandID' :0 , 'category._id' : 0, 'categoryID' : 0}}



//         let data = await productModel.aggregate([
//             matchStage,
//             joinStageWithBrand,
//             joinStageWithCategory,
//             unwindBrand,
//             unwindCategory,
//             projection
//         ])

// return res.status(200).json({status:"success",data:data});
//     }

//     catch (error) {
//                 console.error("Error fetching products by brand:", error);
//                 return res.status(500).json({ status: "fail", message: "Something went wrong" });
//             }
// };



// exports.productListByCategory = async (req, res)=> {
//     try {
//         let categoryId =new ObjectId(req.params.categoryID);
//         let matchStage = {$match: {categoryID: categoryId}};

//         let joinStageWithBrand = {$lookup: {from:"brands", localField: "brandID" , foreignField: "_id", as : "brand"}};
//         let joinStageWithCategory = {$lookup: {from:'categories', localField: 'categoryID', foreignField: '_id', as: 'category'}};

//         let unwindBrand = {$unwind: '$brand'}
//         let unwindCategory = {$unwind: '$category'}

//         let projection = {$project:{'brand._id': 0, 'brandID' :0 , 'category._id' : 0, 'categoryID' : 0}}



//         let data = await productModel.aggregate([
//             matchStage,
//             joinStageWithBrand,
//             joinStageWithCategory,
//             unwindBrand,
//             unwindCategory,
//             projection
//         ])

//         return res.status(200).json({status:"success",data:data});
//     }

//     catch (error) {
//         console.error("Error fetching products by brand:", error);
//         return res.status(500).json({ status: "fail", message: "Something went wrong" });
//     }
// }



// exports.productByKeyword = async (req, res) => {
//     try {
//         const keyword = req.params.Keyword;
//         const searchRegex = new RegExp(keyword, 'i');
//         const searchQuery = { $or: [{ title: searchRegex }, { Des: searchRegex }] };

//         const pipeline = [
//             { $match: searchQuery },
//             {
//                 $lookup: {
//                     from: 'brands',
//                     localField: 'brandID',
//                     foreignField: '_id',
//                     as: 'brand'
//                 }
//             },
//             {
//                 $lookup: {
//                     from: 'categories',
//                     localField: 'categoryID',
//                     foreignField: '_id',
//                     as: 'category'
//                 }
//             },
//             { $unwind: '$brand' },
//             { $unwind: '$category' },
//             {
//                 $project: {
//                     '_id': 0,
//                     'brandID': 0,
//                     'categoryID': 0,
//                     'brand._id': 0,
//                     'category._id': 0
//                 }
//             }
//         ];

//         const products = await productModel.aggregate(pipeline);

//         if (products.length === 0) {
//             return res.status(404).json({ status: 'fail', message: 'No products found' });
//         }

//         return res.status(200).json({ status: 'success', data: products });
//     } catch (error) {
//         console.error('Error fetching products by keyword:', error);
//         return res.status(500).json({ status: 'fail', message: 'Something went wrong' });
//     }
// };




// // Update product
// exports.updateProduct = async (req, res) => {
//     try {
//         const productId = req.params.productId;
//         const updateData = req.body;
        
//         // Check if the product exists
//         const existingProduct = await productModel.findById(productId);
//         if (!existingProduct) {
//             return res.status(404).json({ status: 'fail', message: 'Product not found' });
//         }

//         // Update the product
//         await productModel.findByIdAndUpdate(productId, updateData, { new: true });

//         return res.status(200).json({ status: 'success', message: 'Product updated successfully' });
//     } catch (error) {
//         console.error('Error updating product:', error);
//         return res.status(500).json({ status: 'fail', message: 'Something went wrong' });
//     }
// };

// // Delete product
// exports.deleteProduct = async (req, res) => {
//     try {
//         const productId = req.params.productId;
        
//         // Check if the product exists
//         const existingProduct = await productModel.findById(productId);
//         if (!existingProduct) {
//             return res.status(404).json({ status: 'fail', message: 'Product not found' });
//         }

//         // Delete the product
//         await productModel.findByIdAndDelete(productId);

//         return res.status(200).json({ status: 'success', message: 'Product deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting product:', error);
//         return res.status(500).json({ status: 'fail', message: 'Something went wrong' });
//     }
// };



