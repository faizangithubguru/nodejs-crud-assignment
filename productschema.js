const mongoose = require('mongoose');
    
const ProductSchema = new mongoose.Schema({
   
    productId:String,
    productName:String,
    price:Number,
    category:{type:'ObjectID',ref:'Category'}
    
});
     
const  product =  new mongoose.model('Product', ProductSchema);

module.exports = product
