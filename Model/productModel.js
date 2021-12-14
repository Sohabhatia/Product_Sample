const mongoose = require('mongoose');
const slugify = require('slugify');


const productSchema = new mongoose.Schema(
  {
    
    imgUrl: {
      type: String,
      required: [true, 'A name for tour is required'],
      unique: true,
      
    },
    name: {
      type: String,
      required: [true, 'A field of work should be given to the ngo'],
    },
    slug: String,
    price: {
      type: String,
      trim: true,
      required: [true, ' A summary is required'],
    },
    
  });


const Product = mongoose.model('Product', productSchema);
module.exports = Product;