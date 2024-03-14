const serviceModel = require('../models/serviceModel');
const mongoose = require('mongoose')




// crearte service 
const createService = async (req, res) => {
    try {
        let reqBody = req.body;
        let result = await serviceModel.create(reqBody);
        return res.status(200).json({ status: "success", data: result });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
};


// get all service 
const serviceList = async (req, res) => {
    try {
        const service = await serviceModel.find();
        return res.status(200).json({ status: "success", data: service });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
}


// get service by ID 
const getServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await serviceModel.findById(id);
        if (!service) {
            return res.status(404).json({ status: 'fail', message: 'Service not found' });
        }
        return res.status(200).json({ status: 'success', data: service });
    } catch (error) {
        console.error('Error fetching service by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}


// update service  by ID
const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const { serviceName, des, feature } = req.body;
        const service = await serviceModel.findByIdAndUpdate(id, { serviceName, des, feature }, { new: true });
        if (!service) {
            return res.status(404).json({ status: 'fail', message: 'Service not found' });
        }
        return res.status(200).json({ status: 'success', data: service });
    } catch (error) {
        console.error('Error updating service by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}



// delete service
const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await serviceModel.findByIdAndDelete(id);
        if (!service) {
            return res.status(404).json({ status: 'fail', message: 'service not found' });
        }
        return res.status(200).json({ status: 'success', message: 'service deleted successfully' });
    } catch (error) {
        console.error('Error deleting service by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}




module.exports = {
    createService, serviceList, getServiceById, updateService, deleteService
}