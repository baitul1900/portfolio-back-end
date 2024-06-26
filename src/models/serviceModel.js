const mongoose = require('mongoose');



const serviceData = mongoose.Schema({
    serviceName: { type: String, required: true, unique: true },
    des: { type: String, required: true },
    image:  {type: String, required: true},
    feature: { type: Array, required: true },
    longDescription: { type: String, required: true },
},
    { timestamp: true, versionKey: false }
);


const serviceModel = mongoose.model('services', serviceData);
module.exports = serviceModel;