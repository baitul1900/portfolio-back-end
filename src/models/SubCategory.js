// models/SubCategory.js
const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
}, { timestamps: true, versionKey: false });

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
