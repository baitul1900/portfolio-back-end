// const brandModel = require("../models/brandModel");
// const {createBrandService} = require("../service/brandService");


// exports.createBrand = async (req, res)=> {
//     try {
//         let result = await createBrandService(req);
//         return res.status(200).json(result);
//     }

//     catch (e) {
//         return res.status(500).json({status: "fail", messages: "something went wrong"})
//     }
// }

// // read brand lis 
// exports.brandListController = async (req, res)=> {
//     try {
//         const brand = await brandModel.find();
//         return res.status(200).json({status: "success", data: brand});
//     }
//     catch (e) {
//         return res.status(500).json({status: "fail", messages: "something went wrong"})
//     }
// }

// exports.getBrandById = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const brand = await brandModel.findById(id);
//       if (!brand) {
//         return res.status(404).json({ status: 'fail', message: 'Brand not found' });
//       }
//       return res.status(200).json({ status: 'success', data: brand });
//     } catch (error) {
//       console.error('Error fetching brand by ID:', error);
//       return res.status(500).json({ status: 'error', message: 'Internal server error' });
//     }
//   };

// // update brand 
// exports.updateBrandController = async (req, res)=> {
//     try {
//         let {id} = req.params;
//         let {brandName, des} = req.body;
//         let result = await brandModel.updateOne({_id: id}, req.body, {new: true});
//         return res.status(200).json(result);
//     }
//     catch (e) {
//         return res.status(500).json({status: "fail", messages: "something went wrong"})
//     }
// }

// // delete brand 
// exports.deleteBrandController = async (req, res)=> {
//     try {
//         let {id} = req.params;
//         let query = {_id: id};
//         let result = await brandModel.deleteOne(query);
//         return res.status(200).json({status: "success", data: result});
//     }
//     catch (e) {
//         return res.status(500).json({status: "fail", messages: "something went wrong"})
//     }
// }