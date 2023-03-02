const mongoose = require('mongoose');
 
const CategorySchema = new mongoose.Schema({
   
    categoryId:String,
    categoryName:String
});
const Category = new mongoose.model('Category',CategorySchema);
module.exports = Category;
