const express = require('express');
const router = express.Router();

// import auh verification for oken helpp
const authVerify = require('../middlewares/authVerification');

// all imports about user 
const userController = require('../controller/userController');
const projectController = require('../controller/projectController');
const commentController = require('../controller/commentController');
const {createService, serviceList, getServiceById, updateService, deleteService} = require('../controller/serviceController');
const {createBlog, BlogList, getBlogById, updateBlog, deleteBlog} = require('../controller/blogController');



// user registration routes
router.post('/user-registration', userController.userRegistration);
router.post('/login', userController.userLoginController);
router.get('/profile', authVerify, userController.profileDetails);
router.post('/updateProfile', authVerify, userController.updateProfile);
router.get('/account-recover/:email', userController.accountRecoverController);
router.get('/verify-otp/:email/:otp', userController.verifyOtpController);
router.get('/cpu-performance', userController.getCpuPerformance);




// project controller 
router.post('/create-project', authVerify, projectController.createProject);
router.get('/project', projectController.projectList);
router.get('/project/:id', authVerify, projectController.getProjectById);
router.post('/project-update/:id', authVerify, projectController.updateProject);
router.delete('/project-delete/:id', authVerify, projectController.deleteProject);
router.get('/projects', authVerify, projectController.searchKeyword);


// comment handel 
router.post('/create-comment', commentController.createComment);
router.post('/approve-comment/:id', authVerify, commentController.approveComment);
router.get('/comments', commentController.getAllComment);
router.delete('/delete-comment/:id', authVerify, commentController.deleteComment);

// service handel 
router.post('/create-service', authVerify, createService);
router.get('/service', serviceList);
router.get('/service/:id', authVerify, getServiceById);
router.post('/service-update/:id', authVerify, updateService);
router.delete('/service-delete/:id', authVerify, deleteService);


// blog handel
router.post('/create-blog', authVerify, createBlog);
router.get('/blog', BlogList);
router.get('/blog/:id', authVerify, getBlogById);
router.post('/blog-update/:id', authVerify, updateBlog);
router.delete('/blog-delete/:id', authVerify, deleteBlog);



























module.exports = router;