const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    default: 'No description',
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    required: true // or false, if you don't want it to be mandatory
},
}, { timestamps: true, versionKey: false });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
