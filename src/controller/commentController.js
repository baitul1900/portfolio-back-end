const commentModel = require('../models/commentModel');
const mongoose = require('mongoose')




// crearte comment
const createComment = async (req, res) => {
    try {
        let reqBody = req.body;
        let result = await commentModel.create(reqBody);
        return res.status(200).json({ status: "success", data: result });
    } catch (err) {
        return res.status(500).json({ status: "fail", data: err });
    }
}


// approve comment by ID
const approveComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await commentModel.findByIdAndUpdate(id, { approved: true }, { new: true });
        if (!comment) {
            return res.status(404).json({ status: 'fail', message: 'Comment not found' });
        }
        return res.status(200).json({ status: 'success', data: comment });
    } catch (error) {
        console.error('Error approving comment by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}


// delete comment bt ID
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await commentModel.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ status: 'fail', message: 'Comment not found' });
        }
        return res.status(200).json({ status: 'success', data: comment });
    } catch (error) {
        console.error('Error deleting comment by ID:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}







module.exports = {
    createComment, approveComment, deleteComment
}