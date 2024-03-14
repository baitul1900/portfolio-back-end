const mongoose = require('mongoose');



const commentData = mongoose.Schema({
    content: { type: String, required: true },
    author: { type: String, required: true },
    approved: { type: Boolean, default: false }, 
    createdAt: { type: Date, default: Date.now },
},
    {timestamp:true, versionKey: false}
);


const commentModel = mongoose.model('comments', commentData);
module.exports = commentModel;