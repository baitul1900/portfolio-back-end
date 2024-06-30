const express = require('express');
const router = express.Router();

// import auh verification for oken helpp
const authVerify = require('../middlewares/authVerification');

// all imports about user 
const userController = require('../controller/userController');
const commentController = require('../controller/commentController');
const {createService, serviceList, getServiceById, updateService, deleteService} = require('../controller/serviceController');
const {createBlog, BlogList, getBlogById, updateBlog, deleteBlog} = require('../controller/blogController');
const { createCategory, updateCategory, createSubCategory, getAllCategoriesWithSubCategories, deleteCategory, getAllSubCategory } = require('../controller/CategoryController');
const { createProduct, getAllProducts } = require('../controller/productController');



// User registration route
router.post('/user-registration', userController.userRegistration);

// User login route
router.post('/login', userController.userLoginController);

// Get user profile route
router.get('/profile', authVerify, userController.profileDetails);

// Update user profile route
router.put('/profile', authVerify, userController.updateProfile);




// category create controller 
router.post('/create-category', authVerify, createCategory);

// category update controller
router.put('/category-update/:id', authVerify, updateCategory);

// Route for creating a subcategory
router.post('/create-sub-category', authVerify, createSubCategory);

// get all categoris with sub category
router.get('/categories', getAllCategoriesWithSubCategories);

// delete category
router.delete('/delete-category/:id', authVerify, deleteCategory);

// get Sub Category List 
router.get('/sub-category', getAllSubCategory);




// ==========================

// product create controller
router.post('/create-product', authVerify, createProduct);

// get all products
router.get('/products', getAllProducts);










// comment handel 
router.post('/create-comment', commentController.createComment);
router.post('/approve-comment/:id', authVerify, commentController.approveComment);
router.get('/comments', commentController.getAllComment);
router.delete('/delete-comment/:id', authVerify, commentController.deleteComment);

// service handel 
router.post('/create-service', authVerify, createService);
router.get('/service', serviceList);
router.get('/service/:id', authVerify, getServiceById);
router.get('/service/:id', authVerify, getServiceById);
// for public view
router.get('/serviceBy/:id', getServiceById);
// ----end-----
router.post('/service-update/:id', authVerify, updateService);
router.delete('/service-delete/:id', authVerify, deleteService);


// blog handel
router.post('/create-blog', authVerify, createBlog);
router.get('/blog', BlogList);
router.get('/blog/:id', authVerify, getBlogById);
router.get('/blogBy/:id',  getBlogById);
router.post('/blog-update/:id', authVerify, updateBlog);
router.delete('/blog-delete/:id', authVerify, deleteBlog);



























module.exports = router;