const blogModel = require('../models/blogModel');
const mongoose = require('mongoose');



// crearte Blog 
const createBlog = async (req, res) => {
    try {
        let reqBody = req.body;
        let result = await blogModel.create(reqBody);
        return res.status(200).json({ status: "success", data: result });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
};


// get all Blog 
const BlogList = async (req, res) => {
    try {
        // Extract page and limit from query parameters, provide default values
        const { page = 1, limit = 10 } = req.query;

        // Convert page and limit to numbers
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);

        // Use the paginate method on the model
        const options = {
            page: pageNum,
            limit: limitNum,
            sort: { createdAt: -1 } // Optional: Sort by createdAt in descending order
        };

        const result = await blogModel.paginate({}, options);

        return res.status(200).json({ status: "success", data: result });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
}



// get Blog by ID 
const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const Blog = await blogModel.findById(id);
        if (!Blog) {
            return res.status(404).json({ status: 'fail', message: 'Blog not found' });
        }
        return res.status(200).json({ status: 'success', data: Blog });
    } catch (error) {
        console.error('Error fetching Blog by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}


// update Blog  by ID
const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, shortDes, des, image, author } = req.body;
        const Blog = await blogModel.findByIdAndUpdate(id, { title, shortDes, des, image, author }, { new: true });
        if (!Blog) {
            return res.status(404).json({ status: 'fail', message: 'Blog not found' });
        }
        return res.status(200).json({ status: 'success', data: Blog });
    } catch (error) {
        console.error('Error updating Blog by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}



// delete Blog
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const Blog = await blogModel.findByIdAndDelete(id);
        if (!Blog) {
            return res.status(404).json({ status: 'fail', message: 'Blog not found' });
        }
        return res.status(200).json({ status: 'success', message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting Blog by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}




module.exports = {
    createBlog, BlogList, getBlogById, updateBlog, deleteBlog
}