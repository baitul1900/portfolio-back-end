const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    default: 'No description'
  },
  isDeleted: { type: Boolean, default: false }, // Add this field
}, { timestamps: true, versionKey: false });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;