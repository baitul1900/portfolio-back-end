const mongoose = require('mongoose');
const { Schema } = mongoose;

const OTPModel = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp : {
        type: String,
        unique: true
    }, 
    status: {
        type: Number,
        default : 0
    }
}, {versionKey : false, timestamps: true});


const OTPModels = mongoose.model('otps', OTPModel);

module.exports = OTPModels;