// const customerModel = require('../models/customerModel');
// const mongoose = require('mongoose')
// const ObjectId = mongoose.Types.ObjectId;




// // create customer
// const createCustomer  = async (req,res)=> {
//     try {
//         const { name, phone } = req.body; 
         
//         if (!name.trim()) {
//             return res.json({ error: "Name is required" });
//         }

//         // 3. check if email is taken
//         const existingCustomer = await customerModel.findOne({ phone });

//          if (existingCustomer) {
//             return res.json({ error: "Phone is already taken" });
//          }
        

//          const customer = await new customerModel({
//             name,
//             phone
            
//         }).save();

//     return  res.status(200).json({status: "success", data: customer})
//     }

//     catch (error) {
//         return res.status(500).json({ status: "fail", message: "Something went wrong" });
//     }
    
// }


// // get all customer 
// const getAllCustomer = async (req,res)=> {
//     try {
//         let customer = await customerModel.find();
//         return res.status(200).json({status : "success", data: customer});
//     }
//     catch (error) {
//         return res.status(500).json({ status: "fail", message: error });
//     }
// }






// module.exports = {
//     createCustomer,
//     getAllCustomer
// };