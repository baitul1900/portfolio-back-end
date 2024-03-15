const projectModel = require('../models/projectModel');
const mongoose = require('mongoose')




// crearte project 
const createProject = async (req, res) => {
    try {
        let reqBody = req.body;
        let result = await projectModel.create(reqBody);
        return res.status(200).json({ status: "success", data: result });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
};


// get all project 
const projectList = async (req, res) => {
    try {
        const project = await projectModel.find();
        return res.status(200).json({ status: "success", data: project });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
}


// get project by ID 
const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await projectModel.findById(id);
        if (!project) {
            return res.status(404).json({ status: 'fail', message: 'Project not found' });
        }
        return res.status(200).json({ status: 'success', data: project });
    } catch (error) {
        console.error('Error fetching project by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}


// update project  by ID
const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { projectName, shortDes, Des, technologyUse, image, notes, allPage, allFeature } = req.body;
        const project = await projectModel.findByIdAndUpdate(id, { projectName, shortDes, Des, technologyUse, image, notes, allPage, allFeature }, { new: true });
        if (!project) {
            return res.status(404).json({ status: 'fail', message: 'Project not found' });
        }
        return res.status(200).json({ status: 'success', data: project });
    } catch (error) {
        console.error('Error updating project by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}



// delete project
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await projectModel.findByIdAndDelete(id);
        if (!project) {
            return res.status(404).json({ status: 'fail', message: 'Project not found' });
        }
        return res.status(200).json({ status: 'success', message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}


// search by keyword
const searchKeyword = async (req, res) => {
    try {
        let query = {};
        const keyword = req.query.keyword;
        if (keyword) {
            query = { projectName: { $regex: keyword, $options: 'i' } };
        }
        const projects = await projectModel.find(query);
        return res.status(200).json({ status: "success", data: projects });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
}




module.exports = {
    createProject, projectList, getProjectById, updateProject, deleteProject, searchKeyword
}