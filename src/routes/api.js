const express = require('express');
const router = express.Router();

// import auh verification for oken helpp
// const authVerify = require('../middlewares/authVerification');

// // all imports about user 
// const userController = require('../controller/userController');

// // all brand controller 
// const brandController = require('../controller/brandController');

// // category controller
// const categoryController = require('../controller/categoryController');

// // product controller 
// const productController = require("../controller/productController");


// // customer controller 
// const cutomerController = require('../controller/customerController');


// // user registration routes
// router.post('/user-registration', userController.userRegistration);
// router.post('/login', userController.userLoginController);
// router.get('/profile', authVerify, userController.profileDetails);
// router.post('/updateProfile', authVerify, userController.updateProfile);
// router.get('/account-recover/:email', userController.accountRecoverController);
// router.get('/verify-otp/:email/:otp', userController.verifyOtpController);

// // brand routes
// router.post('/create-brand', authVerify, brandController.createBrand);
// router.get('/brandList', authVerify, brandController.brandListController);
// router.post('/brand/:id', authVerify, brandController.updateBrandController);
// router.get('/deleteBrand/:id', authVerify, brandController.deleteBrandController);
// router.get('/getbrand/:id', authVerify, brandController.getBrandById);


// // category routes
// router.post('/create-category', authVerify, categoryController.createCategory);
// router.get('/category', authVerify, categoryController.categoryListController);
// router.post('/category-update/:id', authVerify, categoryController.updatecategory);
// router.get('/category-delete/:id', authVerify, categoryController.deleteCategoryController);
// router.get('/getByCategory/:id', authVerify, categoryController.getCategoryById);



// // product controller 
// router.post('/create-product', authVerify, productController.createProduct);
// router.get('/product', authVerify, productController.productList);
// router.get('/product-brand/:brandID', authVerify, productController.productByBrand);
// router.get('/product-category/:categoryID', authVerify, productController.productListByCategory);
// router.get('/product-by-keyword/:Keyword', authVerify, productController.productByKeyword);
// router.post('/products/:productId', authVerify, productController.updateProduct);
// router.delete('/products/:productId', authVerify, productController.deleteProduct);



// // customer routes
// router.post('/create-customer', authVerify, cutomerController.createCustomer);
// router.get('/customer', authVerify, cutomerController.getAllCustomer);























module.exports = router;