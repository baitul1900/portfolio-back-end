const mongoose = require('mongoose');



const projectData = mongoose.Schema({
    projectName : {type: String, required: true},
    shortDes : {type: String, required: true},
    Des: {type: String, required: true},
    technologyUse : {type: String, required: true},
    image:  {type: String, required: true},
    notes:  {type: String},
    allPage:  {type: Array},
    allFeature:  {type: Array},
},
    {timestamp:true, versionKey: false}
);


const projectModel = mongoose.model('projects', projectData);
module.exports = projectModel;