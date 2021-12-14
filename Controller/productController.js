
const Product = require('./../Model/productModel');
const User = require('./../Model/userModel');
exports.getProducts = async (req, res, next) => {
    const products = await Product.find();
  
    res.status(200).json({
      status: "success",
      requestTime: req.requestTime,
      data: {
        data: products,
      },
    });
    
  };

  exports.addProducts = async (req, res, next) => {
    const user = req.user;
    const product = await Product.findOne({name : req.body.name});
    console.log(product);
    await User.findByIdAndUpdate(user._id, {
        $push: { products: product._id }
    })
    res.status(200).json({
      status: "success",
      requestTime: req.requestTime,
      data: {
        data: product,
      },
    });
    
  };

  exports.getMyProducts = async (req, res, next) => {
    const user = req.user;
    const currentUser = await User.findById(user._id);
    const products_id = currentUser.products;
   
   const myProducts = await Product.find({_id : products_id });
    
    res.status(200).json({
      status: "success",
      requestTime: req.requestTime,
      data: {
        data: myProducts,
      },
    });
    
  };