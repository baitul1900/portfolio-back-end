const mongoose = require('mongoose');



const blogData = mongoose.Schema({
    title : {type: String, required: true, unique: true},
    shortDes : {type: String, required: true},
    des: {type: String, required: true},
    image:  {type: String, required: true},
    author:  {type: String, required: true},
    createdAt:  {type: Date, default: Date.now},
},
    {timestamp:true, versionKey: false}
);


const blogModel = mongoose.model('blogs', blogData);
module.exports = blogModel;